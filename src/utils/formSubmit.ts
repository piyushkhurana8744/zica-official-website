/**
 * Submits an enquiry form to the API and redirects the user to the thank-you page.
 * Uses window.location.href for universal redirection in Next.js Client Components.
 */
export async function submitEnquiry(data: {
  name: string;
  mobile: string;
  email: string;
  course: string;
  token?: string;
}) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || "Failed to submit enquiry");
    }

    // Redirect to thank-you page
    window.location.href = "/thank-you";
    return true;
  } catch (error: any) {
    console.error("Submission error:", error);
    alert(error?.message || "There was an error submitting your enquiry. Please try again.");
    throw error;
  }
}
