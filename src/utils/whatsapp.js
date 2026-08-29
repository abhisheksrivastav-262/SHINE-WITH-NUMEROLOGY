// WhatsApp Enquiry Redirect Utility

export const WHATSAPP_NUMBER = "919870226260";

export function sendWhatsAppEnquiry({
  name = "N/A",
  phone = "N/A",
  email = "N/A",
  service = "Personal Numerology Reading",
  date = "As per availability",
  time = "Flexible",
  message = "N/A"
}) {
  const formattedMessage = 
`🌟 *NEW ENQUIRY – SHINE WITH NUMEROLOGY*

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🔮 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
💬 Message: ${message}`;

  const encodedMessage = encodeURIComponent(formattedMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp link in new tab or window
  window.open(whatsappUrl, '_blank');
}
