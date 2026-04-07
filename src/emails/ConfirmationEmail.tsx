interface ConfirmationEmailProps {
  name: string;
  eventType: "walk_the_world" | "hfhy_dinner";
  ticketType: string;
}

export function renderConfirmationEmail({ name, eventType, ticketType }: ConfirmationEmailProps) {
  const eventName = eventType === "walk_the_world" ? "Walk The World" : "HFHY Dinner";
  const eventEmoji = eventType === "walk_the_world" ? "🌿" : "✨";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #F8F9FB; margin: 0; padding: 40px 20px;">
      <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <!-- Header -->
        <div style="background: #0B3C7C; padding: 40px 32px; text-align: center;">
          <p style="color: #EADBC8; font-size: 12px; text-transform: uppercase; letter-spacing: 3px; margin: 0 0 8px;">
            ILEA Lifestyle Experience Series
          </p>
          <h1 style="color: white; font-size: 28px; margin: 0; font-weight: 600;">
            ${eventEmoji} ${eventName}
          </h1>
        </div>

        <!-- Body -->
        <div style="padding: 40px 32px;">
          <p style="color: #1A1A2E; font-size: 18px; font-weight: 600; margin: 0 0 16px;">
            Welcome, ${name}!
          </p>
          <p style="color: #5A5A72; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
            Thank you for joining the ${eventName} experience. Your registration has been received and we are excited to have you.
          </p>

          <!-- Details card -->
          <div style="background: #F8F9FB; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #5A5A72; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">
              Registration Details
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="color: #5A5A72; font-size: 14px; padding: 6px 0;">Event</td>
                <td style="color: #1A1A2E; font-size: 14px; padding: 6px 0; text-align: right; font-weight: 500;">${eventName}</td>
              </tr>
              <tr>
                <td style="color: #5A5A72; font-size: 14px; padding: 6px 0;">Ticket</td>
                <td style="color: #1A1A2E; font-size: 14px; padding: 6px 0; text-align: right; font-weight: 500;">${ticketType}</td>
              </tr>
              <tr>
                <td style="color: #5A5A72; font-size: 14px; padding: 6px 0;">Status</td>
                <td style="color: #C9A96E; font-size: 14px; padding: 6px 0; text-align: right; font-weight: 500;">Confirmed</td>
              </tr>
            </table>
          </div>

          <p style="color: #5A5A72; font-size: 14px; line-height: 1.7; margin: 0;">
            We will send you more details as the event approaches. In the meantime, feel free to reach out if you have any questions.
          </p>
        </div>

        <!-- Footer -->
        <div style="padding: 24px 32px; border-top: 1px solid #F0F0F0; text-align: center;">
          <p style="color: #9999AA; font-size: 12px; margin: 0;">
            ILEA &mdash; International Leading Education Alliance
          </p>
          <p style="color: #CCCCCC; font-size: 11px; margin: 8px 0 0;">
            Movement &rarr; Connection &rarr; Transformation
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
