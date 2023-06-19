const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
  });
  // Teste se productDetails é uma função.
  it('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function')
  })
  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true)
  })
  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    const resultado = productDetails('Alcool gel', 'Máscara');
    expect(resultado).toHaveLength(2);
  })
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se dois itens dentro do array retornado pela função são objetos.', () => {
    const resultado = productDetails('Alcool gel', 'Máscara');
    expect(typeof resultado).toBe('object');
  })
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ]);
  })
  // Teste se os dois productIds terminam com 123.

  it('Verifica se os dois productIds terminam com 123.', () => {
    const resultado = productDetails('Alcool gel', 'Máscara');
    const product1 = resultado[0].details.productId;
    const product2 = resultado[1].details.productId;
    expect(product1.endsWith('123')).toEqual(true);
    expect(product2.endsWith('123')).toEqual(true);
  })
});
