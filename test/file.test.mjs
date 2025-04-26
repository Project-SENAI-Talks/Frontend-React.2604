import { assert, test } from 'poku';

assert(true, 'Poku will describe it 🐷');

test('Soma de 1 + 1 deve ser 2', () => {
    const result = 1 + 1;
    if (result !== 2) {
      throw new Error(`Esperado 2, mas recebido ${result}`);
    }
  });