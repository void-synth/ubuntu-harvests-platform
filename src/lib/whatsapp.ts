// Email contact information
export const COMPANY_EMAIL = "ubuntuharvests@gmail.com";

// Generate email link with optional pre-filled subject and body
export const getEmailLink = (subject?: string, body?: string) => {
  const email = COMPANY_EMAIL;
  const params = new URLSearchParams();
  if (subject) {
    params.append("subject", subject);
  }
  if (body) {
    params.append("body", body);
  }
  const queryString = params.toString();
  return queryString ? `mailto:${email}?${queryString}` : `mailto:${email}`;
};

// Legacy function name for backward compatibility - now returns email link
export const getWhatsAppLink = (message?: string, number?: string) => {
  const subject = "Inquiry about Ubuntu Harvests";
  const body = message || DEFAULT_INQUIRY_MESSAGE;
  return getEmailLink(subject, body);
};

// Default inquiry message
export const DEFAULT_INQUIRY_MESSAGE = "Hello! I'm interested in learning more about Ubuntu Harvests products and would like to discuss potential trade opportunities.";
