import type { TProductDraft } from '../../../types';
import crystalDrinkingGlass from './crystal-drinking-glass';
import productDraft from './crystal-drinking-glass.spec.json';

describe(`with crystalDrinkingGlass preset`, () => {
  it(`should return a crystalDrinkingGlass preset`, () => {
    const crystalDrinkingGlassPreset =
      crystalDrinkingGlass().build<TProductDraft>();
    expect(crystalDrinkingGlassPreset).toMatchObject(productDraft);
  });
});
