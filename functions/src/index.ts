import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Configure email transport using environment variables
// Set with: firebase functions:config:set email.user="..." email.pass="..."
const getTransporter = () => {
  const config = functions.config();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email?.user || process.env.EMAIL_USER,
      pass: config.email?.pass || process.env.EMAIL_PASS,
    },
  });
};

interface LeadData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  createdAt: admin.firestore.Timestamp;
  status: string;
}

/**
 * Triggered when a new lead is added to Firestore "leads" collection.
 * Sends notification email to the business owner.
 */
export const onNewLead = functions.firestore
  .document("leads/{leadId}")
  .onCreate(async (snap, context) => {
    const lead = snap.data() as LeadData;
    const leadId = context.params.leadId;

    const transporter = getTransporter();

    const mailOptions = {
      from: `"Aquatic Shipping Website" <${functions.config().email?.user}>`,
      to: "devang@aquaticshipping.in",
      subject: `🚢 New Lead: ${lead.service} — ${lead.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1F3A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Lead Received</h1>
            <p style="color: #FF7A00; margin: 4px 0 0; font-size: 14px;">Aquatic Shipping Services</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0B1F3A;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <a href="tel:${lead.phone}" style="color: #FF7A00; font-weight: bold;">${lead.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${lead.email}" style="color: #FF7A00;">${lead.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">${lead.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #333;">${lead.message}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; display: flex; gap: 12px;">
              <a href="tel:${lead.phone}"
                 style="display: inline-block; background: #FF7A00; color: white; padding: 12px 24px; 
                        border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
                📞 Call Now
              </a>
              <a href="https://wa.me/${lead.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(lead.name)},%20I'm%20Devang%20from%20Aquatic%20Shipping.%20I%20received%20your%20enquiry%20for%20${encodeURIComponent(lead.service)}."
                 style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; 
                        border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
                💬 WhatsApp
              </a>
            </div>

            <p style="margin-top: 20px; color: #999; font-size: 11px;">
              Lead ID: ${leadId} • Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent for lead ${leadId}`);

      // Also send auto-reply to the prospect
      const autoReplyOptions = {
        from: `"Devang Mota — Aquatic Shipping" <${functions.config().email?.user}>`,
        to: lead.email,
        subject: `Thank you for contacting Aquatic Shipping Services`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0B1F3A; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Thank You, ${lead.name}!</h1>
              <p style="color: #FF7A00; margin: 4px 0 0; font-size: 14px;">We've received your enquiry.</p>
            </div>
            <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
              <p style="color: #333;">Hi ${lead.name},</p>
              <p style="color: #555; line-height: 1.6;">
                Thank you for reaching out to <strong>Aquatic Shipping Services</strong>. We've received your 
                enquiry for <strong>${lead.service}</strong> and our team will contact you within 2 business hours.
              </p>
              <p style="color: #555;">In the meantime, feel free to:</p>
              <ul style="color: #555;">
                <li>Call us directly: <a href="tel:+919099904497" style="color: #FF7A00;">+91 90999 04497</a></li>
                <li>WhatsApp us: <a href="https://wa.me/919099904497" style="color: #FF7A00;">Chat Now</a></li>
              </ul>
              <p style="color: #555; margin-top: 20px;">
                Best regards,<br />
                <strong>Devang Mota</strong><br />
                Director, Aquatic Shipping Services<br />
                Gandhidham, Gujarat
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(autoReplyOptions);
      console.log(`Auto-reply sent to ${lead.email}`);
    } catch (error) {
      console.error("Email send error:", error);
    }

    return null;
  });
