# EmailJS Setup Instructions

This portfolio uses EmailJS to send contact form submissions directly to your email address (sohamchavan.sc@gmail.com) without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Content:**
```
Hello Soham,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** in the API Keys section

### 5. Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'your_actual_service_id', // Replace with your Service ID
  templateId: 'your_actual_template_id', // Replace with your Template ID
  publicKey: 'your_actual_public_key', // Replace with your Public Key
  toEmail: 'sohamchavan.sc@gmail.com'
};
```

### 6. Test the Setup
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email (sohamchavan.sc@gmail.com) for the message

## Features

- ✅ Sends emails directly to sohamchavan.sc@gmail.com
- ✅ Includes sender's name, email, subject, and message
- ✅ Shows success/error notifications to users
- ✅ Form validation and loading states
- ✅ No backend server required

## Troubleshooting

- **Email not received**: Check your spam folder
- **Service error**: Verify your EmailJS credentials are correct
- **Template error**: Ensure your template uses the correct variable names ({{from_name}}, {{from_email}}, etc.)
- **Rate limiting**: Free EmailJS accounts have a limit of 200 emails per month

## Security Notes

- EmailJS credentials are safe to use in frontend code
- The public key is designed to be public
- Consider upgrading to a paid plan for production use with higher limits
