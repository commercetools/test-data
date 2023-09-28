import type { TProductDraft } from '../../../types';
import cocktailStirringSpoon from './cocktail-stirring-spoon';
import productDraft from './cocktail-stirring-spoon.spec.json';

describe(`with cocktailStirringSpoon preset`, () => {
  it(`should return a cocktailStirringSpoon preset`, () => {
    const cocktailStirringSpoonPreset =
      cocktailStirringSpoon().build<TProductDraft>();
    expect(cocktailStirringSpoonPreset).toMatchObject(productDraft);
  });
});
