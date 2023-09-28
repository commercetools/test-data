import type { TProductDraft } from '../../../types';
import sparkleChampagneGlass from './sparkle-champagne-glass';
import productDraft from './sparkle-champagne-glass.spec.json';

describe(`with sparkleChampagneGlass preset`, () => {
  it(`should return a sparkleChampagneGlass preset`, () => {
    const sparkleChampagneGlassPreset =
      sparkleChampagneGlass().build<TProductDraft>();
    expect(sparkleChampagneGlassPreset).toMatchObject(productDraft);
  });
});
