/**
 * Utility functions
 */

export const generateWhatsAppMessage = (message) => {
  return encodeURIComponent(message);
};

export const generateWhatsAppUrl = (number, message) => {
  return `https://wa.me/${number}?text=${generateWhatsAppMessage(message)}`;
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};