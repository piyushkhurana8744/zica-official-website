"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: "light" | "dark" | "auto";
}

export interface TurnstileRef {
  reset: () => void;
}

declare global {
  interface Window {
    onloadTurnstileCallback?: () => void;
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const Turnstile = forwardRef<TurnstileRef, TurnstileProps>(
  ({ onVerify, onExpire, onError, theme = "dark" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

    const onVerifyRef = useRef(onVerify);
    const onExpireRef = useRef(onExpire);
    const onErrorRef = useRef(onError);

    useEffect(() => {
      onVerifyRef.current = onVerify;
    }, [onVerify]);

    useEffect(() => {
      onExpireRef.current = onExpire;
    }, [onExpire]);

    useEffect(() => {
      onErrorRef.current = onError;
    }, [onError]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      let isMounted = true;
      const scriptId = "cloudflare-turnstile-script";

      const initializeTurnstile = () => {
        if (!containerRef.current || !window.turnstile) return;

        // Clean up previous widget instance if it exists
        if (widgetIdRef.current) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {
            console.error("Error removing old Turnstile widget:", e);
          }
          widgetIdRef.current = null;
        }

        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (isMounted) onVerifyRef.current(token);
            },
            "expired-callback": () => {
              if (isMounted && onExpireRef.current) onExpireRef.current();
            },
            "error-callback": () => {
              if (isMounted && onErrorRef.current) onErrorRef.current();
            },
            theme: theme,
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error("Failed to render Turnstile widget:", err);
        }
      };

      // Load Turnstile script dynamically if not present
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

      const checkAndInitialize = () => {
        if (window.turnstile) {
          initializeTurnstile();
        } else {
          // If turnstile is not loaded yet, retry shortly or listen to script onload
          const interval = setInterval(() => {
            if (window.turnstile) {
              clearInterval(interval);
              initializeTurnstile();
            }
          }, 100);
          return () => clearInterval(interval);
        }
      };

      const cleanupInterval = checkAndInitialize();

      return () => {
        isMounted = false;
        if (cleanupInterval) cleanupInterval();
        if (window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {}
        }
      };
    }, [theme, siteKey]);

    return (
      <div className="w-full flex justify-center py-2">
        <div ref={containerRef} className="cf-turnstile" />
      </div>
    );
  }
);

Turnstile.displayName = "Turnstile";

export default Turnstile;
