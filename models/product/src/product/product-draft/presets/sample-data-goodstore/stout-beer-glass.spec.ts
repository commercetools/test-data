import type { TProductDraft } from '../../../types';
import stoutBeerGlass from './stout-beer-glass';

describe(`with stoutBeerGlass preset`, () => {
  it(`should return a stoutBeerGlass preset`, () => {
    const stoutBeerGlassPreset = stoutBeerGlass().build<TProductDraft>();
    expect(stoutBeerGlassPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a stoutBeerGlass preset when built for graphql`, () => {
    const stoutBeerGlassPresetGraphql =
      stoutBeerGlass().buildGraphql<TProductDraft>();
    expect(stoutBeerGlassPresetGraphql).toMatchInlineSnapshot(``);
  });
});
