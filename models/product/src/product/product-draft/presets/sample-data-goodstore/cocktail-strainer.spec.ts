import type { TProductDraft } from '../../../types';
import cocktailStrainer from './cocktail-strainer';
import productDraft from './cocktail-strainer.spec.json';

describe(`with cocktailStrainer preset`, () => {
  it(`should return a cocktailStrainer preset`, () => {
    const cocktailStrainerPreset = cocktailStrainer().build<TProductDraft>();
    expect(cocktailStrainerPreset).toMatchObject(productDraft.rest);
  });
});
