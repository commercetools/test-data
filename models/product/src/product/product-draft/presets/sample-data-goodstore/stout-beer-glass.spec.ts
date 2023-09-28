import type { TProductDraft } from '../../../types';
import stoutBeerGlass from './stout-beer-glass';
import productDraft from './stout-beer-glass.spec.json';

describe(`with stoutBeerGlass preset`, () => {
  it(`should return a stoutBeerGlass preset`, () => {
    const stoutBeerGlassPreset = stoutBeerGlass().build<TProductDraft>();
    expect(stoutBeerGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a stoutBeerGlass preset when built for graphql`, () => {
    const stoutBeerGlassPresetGraphql =
      stoutBeerGlass().buildGraphql<TProductDraft>();
    expect(stoutBeerGlassPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
