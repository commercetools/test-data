import type { TProductDraft } from '../../../types';
import crystalDrinkingGlass from './crystal-drinking-glass';
import productDraft from './crystal-drinking-glass.spec.json';

describe(`with crystalDrinkingGlass preset`, () => {
  it(`should return a crystalDrinkingGlass preset`, () => {
    const crystalDrinkingGlassPreset =
      crystalDrinkingGlass().build<TProductDraft>();
    expect(crystalDrinkingGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a crystalDrinkingGlass preset when built for graphql`, () => {
    const crystalDrinkingGlassPresetGraphql =
      crystalDrinkingGlass().buildGraphql<TProductDraft>();
    expect(crystalDrinkingGlassPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
