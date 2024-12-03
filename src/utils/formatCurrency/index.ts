function formatCurrencyRp(number: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // Remove as casas decimais, comum na formatação de Rp
  }).format(number);
}

export default formatCurrencyRp;
