// src/utils/priceFormatter.js
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      currencyDisplay: 'narrowSymbol', // Use narrow symbol to adjust the spacing
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price).replace('₹', '₹\u00A0'); // Add a space after the currency symbol
  };