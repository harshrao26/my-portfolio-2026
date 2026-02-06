/**
 * GOOGLE APPS SCRIPT CODE
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Update the EMAIL_RECIPIENT constant with your email address
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy and copy the Web App URL
 * 10. Add the URL to your .env.local file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

// ============================================
// CONFIGURATION
// ============================================

// Replace with your email address
const EMAIL_RECIPIENT = "your-email@example.com";

// Sheet name (will be created if it doesn't exist)
const SHEET_NAME = "Contact Submissions";

// ============================================
// MAIN FUNCTION - Handles POST requests
// ============================================

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get or create the sheet
    const sheet = getOrCreateSheet();

    // Add data to sheet
    const rowData = [
      new Date(data.timestamp),
      data.name,
      data.email,
      data.phone,
      data.message,
      "New", // Status column
    ];

    sheet.appendRow(rowData);

    // Send email notification
    sendEmailNotification(data);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Data saved successfully",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// GET SHEET - Creates sheet if it doesn't exist
// ============================================

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);

    // Add headers
    const headers = [
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Message",
      "Status",
    ];

    sheet.appendRow(headers);

    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#4CAF50");
    headerRange.setFontColor("#FFFFFF");

    // Set column widths
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 120); // Phone
    sheet.setColumnWidth(5, 400); // Message
    sheet.setColumnWidth(6, 100); // Status

    // Freeze header row
    sheet.setFrozenRows(1);
  }

  return sheet;
}

// ============================================
// SEND EMAIL NOTIFICATION
// ============================================

function sendEmailNotification(data) {
  const subject = `🔔 New Contact Form Submission from ${data.name}`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #ffffff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 10px 10px 0 0;
          margin: -30px -30px 20px -30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: bold;
          color: #667eea;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
        }
        .message-box {
          background: #fff;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
          margin-top: 10px;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e9ecef;
          text-align: center;
          color: #6c757d;
          font-size: 12px;
        }
        .timestamp {
          color: #6c757d;
          font-size: 14px;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📬 New Contact Form Submission</h1>
        </div>
        
        <div class="field">
          <div class="field-label">👤 Name</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">📧 Email</div>
          <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        
        <div class="field">
          <div class="field-label">📱 Phone</div>
          <div class="field-value">${data.phone}</div>
        </div>
        
        <div class="field">
          <div class="field-label">💬 Message</div>
          <div class="message-box">${data.message}</div>
        </div>
        
        <div class="footer">
          <p class="timestamp">⏰ Received: ${new Date(data.timestamp).toLocaleString()}</p>
          <p>This email was automatically generated from your portfolio contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Plain text version for email clients that don't support HTML
  const plainBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}

Received: ${new Date(data.timestamp).toLocaleString()}
  `;

  // Send email
  MailApp.sendEmail({
    to: EMAIL_RECIPIENT,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
  });
}

// ============================================
// TEST FUNCTION (Optional - for testing)
// ============================================

function testSubmission() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    message: "This is a test message from the contact form.",
    timestamp: new Date().toISOString(),
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
