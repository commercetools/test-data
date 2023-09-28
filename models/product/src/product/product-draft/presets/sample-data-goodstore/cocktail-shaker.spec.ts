import type { TProductDraft } from '../../../types';
import cocktailShaker from './cocktail-shaker';
import productDraft from './cocktail-shaker.spec.json';

describe(`with cocktailShaker preset`, () => {
  it(`should return a cocktailShaker preset`, () => {
    const cocktailShakerPreset = cocktailShaker().build<TProductDraft>();
    expect(cocktailShakerPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cocktailShaker preset when built for graphql`, () => {
    const cocktailShakerPresetGraphql =
      cocktailShaker().buildGraphql<TProductDraft>();
    expect(cocktailShakerPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
