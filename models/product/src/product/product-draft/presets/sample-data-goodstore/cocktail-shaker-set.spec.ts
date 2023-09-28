import type { TProductDraft } from '../../../types';
import cocktailShakerSet from './cocktail-shaker-set';
import productDraft from './cocktail-shaker-set.spec.json';

describe(`with cocktailShakerSet preset`, () => {
  it(`should return a cocktailShakerSet preset`, () => {
    const cocktailShakerSetPreset = cocktailShakerSet().build<TProductDraft>();
    expect(cocktailShakerSetPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cocktailShakerSet preset when built for graphql`, () => {
    const cocktailShakerSetPresetGraphql =
      cocktailShakerSet().buildGraphql<TProductDraft>();
    expect(cocktailShakerSetPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
