// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceId: 'service_portfolio', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
  toEmail: 'sohamchavan.sc@gmail.com'
};

// EmailJS template parameters type
export type EmailTemplateParams = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
};
