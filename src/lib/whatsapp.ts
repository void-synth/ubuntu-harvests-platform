// WhatsApp contact information
export const WHATSAPP_NUMBER = "+2348165073846"; // Nigeria number
export const WHATSAPP_NUMBER_UK = "+447401324679"; // UK number

// Generate WhatsApp link with optional pre-filled message
export const getWhatsAppLink = (message?: string, number?: string) => {
  const phoneNumber = number || WHATSAPP_NUMBER;
  const baseUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

// Default inquiry message
export const DEFAULT_INQUIRY_MESSAGE = "Hello! I'm interested in learning more about Ubuntu Harvests products and would like to discuss potential trade opportunities.";
