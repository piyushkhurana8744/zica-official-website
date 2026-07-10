import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, mobile, email, course, token } = await request.json();

    if (!name || !mobile || !email || !course) {
      return NextResponse.json(
        { error: "Name, mobile, email, and course are required fields." },
        { status: 400 }
      );
    }

    // Verify Cloudflare Turnstile token
    const secretKey = process.env.TURNSTILE_SECRET_KEY || "1x00000000000000000000000000000000";
    if (!token) {
      return NextResponse.json(
        { error: "Security verification token is missing. Please try again." },
        { status: 400 }
      );
    }

    try {
      const verifyResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
        }
      );

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        console.error("Turnstile verification failed:", verifyData);
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error("Turnstile verification API error:", err);
      return NextResponse.json(
        { error: "Internal security verification error. Please try again." },
        { status: 500 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL || "no-reply@zicapitampura.com";
    const adminEmail = process.env.ADMIN_EMAIL || "piyushkhurana8744@gmail.com";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send thank you email to the user
      await transporter.sendMail({
        from: `"ZICA Pitampura" <${fromEmail}>`,
        to: email,
        subject: `Thank you for your enquiry - ZICA Pitampura`,
        text: `Dear ${name},\n\nThank you for choosing ZICA Pitampura. We have received your enquiry for the ${course} course.\n\nOur academic counsellor will connect with you shortly.\n\nFor immediate assistance, please call us at 8800505151.\n\nBest regards,\nTeam ZICA Pitampura`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #E76B24;">Thank You for Reaching Out!</h2>
            <p>Dear <strong>${name}</strong>,</p>
            <p>We are thrilled to receive your interest in the <strong>${course}</strong> course at ZICA Pitampura.</p>
            <p>Our senior academic counsellor will get in touch with you shortly on your number <strong>${mobile}</strong> to discuss the batch schedules, curriculum details, and fee structure.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #E76B24; margin: 20px 0;">
              <strong>Need Immediate Assistance?</strong><br/>
              Feel free to call our counsellor directly at <a href="tel:8800505151" style="color: #E76B24; font-weight: bold; text-decoration: none;">8800505151</a>.
            </div>
            <p>Best regards,<br/><strong>Team ZICA Pitampura</strong></p>
          </div>
        `,
      });

      // Send notification email to the admin
      await transporter.sendMail({
        from: `"ZICA Website Lead" <${fromEmail}>`,
        to: adminEmail,
        subject: `New Lead: ${name} - ${course}`,
        text: `New lead details:\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCourse: ${course}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #333;">New Lead Received</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Mobile:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="tel:${mobile}">${mobile}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Course:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${course}</td>
              </tr>
            </table>
          </div>
        `,
      });

      console.log(`Emails successfully sent for lead ${email}`);
    } else {
      console.warn("SMTP environment variables are not fully configured. Logging lead details to console.");
      console.log(`[LEAD] Name: ${name}, Mobile: ${mobile}, Email: ${email}, Course: ${course}`);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error: any) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message || error },
      { status: 500 }
    );
  }
}
