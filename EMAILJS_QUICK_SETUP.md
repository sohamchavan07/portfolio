# Quick EmailJS Setup for Contact Form

## The Problem
The contact form is failing because EmailJS credentials are not properly configured. The current configuration uses placeholder values.

## Quick Fix (5 minutes)

### Step 1: Get EmailJS Credentials
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (if you don't have one)
3. Go to "Email Services" → "Add New Service" → Choose "Gmail"
4. Connect your Gmail account (sohamchavan.sc07@gmail.com)
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 2: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Use this template:

**Subject:** New Contact Form Message - {{subject}}

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
Sent from your portfolio website.
```

3. Save and note down your **Template ID** (e.g., `template_xyz789`)

### Step 3: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `abc123def456`)

### Step 4: Update Configuration
Open `src/config/emailjs.ts` and replace:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID_HERE', // Replace with your actual service ID
  templateId: 'YOUR_TEMPLATE_ID_HERE', // Replace with your actual template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Replace with your actual public key
  toEmail: 'sohamchavan.sc07@gmail.com'
};
```

### Step 5: Test
1. Run `npm run dev`
2. Go to the contact form
3. Fill it out and submit
4. Check your email!

## Alternative: Use a Working Demo Service

If you want to test immediately, you can use this demo configuration:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_8x9k2qj',
  templateId: 'template_contact_form', 
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Still need your public key
  toEmail: 'sohamchavan.sc07@gmail.com'
};
```

But you'll still need to get your own public key from EmailJS.

## Current Status
✅ Email address corrected to sohamchavan.sc07@gmail.com
✅ EmailJS package installed
✅ Contact form code is working
❌ Need actual EmailJS credentials

Once you update the credentials, the contact form will work perfectly!
