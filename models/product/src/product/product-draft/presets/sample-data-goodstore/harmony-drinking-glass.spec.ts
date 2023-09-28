import type { TProductDraft } from '../../../types';
import harmonyDrinkingGlass from './harmony-drinking-glass';
import productDraft from './harmony-drinking-glass.spec.json';

describe(`with harmonyDrinkingGlass preset`, () => {
  it(`should return a harmonyDrinkingGlass preset`, () => {
    const harmonyDrinkingGlassPreset =
      harmonyDrinkingGlass().build<TProductDraft>();
    expect(harmonyDrinkingGlassPreset).toMatchObject(productDraft);
  });
});
