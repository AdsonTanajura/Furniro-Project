function calcularDesconto(valor: number, desconto: number) {
  if (typeof valor !== 'number' || typeof desconto !== 'number') {
    throw new Error('Os parâmetros devem ser números.');
  }

  if (desconto < 0 || desconto > 100) {
    throw new Error('O desconto deve estar entre 0 e 100.');
  }

  const valorComDesconto = valor - valor * (desconto / 100);
  return valorComDesconto;
}

//   // Exemplo de uso:
//   const precoOriginal = 200;
//   const desconto = 15;
//   const precoComDesconto = calcularDesconto(precoOriginal, desconto);

//   console.log(`O preço com desconto é: R$${precoComDesconto.toFixed(2)}`);
export default calcularDesconto;
