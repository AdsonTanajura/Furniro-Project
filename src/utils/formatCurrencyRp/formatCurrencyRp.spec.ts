import formatCurrencyRp from '.';

describe('formatCurrencyRp', () => {
  it('deve formatar o valor corretamente', () => {
    const valor = formatCurrencyRp(2000000);

    expect(valor.trim()).toBe('Rp 2.000.000');
  });
});
