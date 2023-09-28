import type { TProductDraft } from '../../../types';
import sparkleChampagneGlass from './sparkle-champagne-glass';
import productDraft from './sparkle-champagne-glass.spec.json';

describe(`with sparkleChampagneGlass preset`, () => {
  it(`should return a sparkleChampagneGlass preset`, () => {
    const sparkleChampagneGlassPreset =
      sparkleChampagneGlass().build<TProductDraft>();
    expect(sparkleChampagneGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a sparkleChampagneGlass preset when built for graphql`, () => {
    const sparkleChampagneGlassPresetGraphql =
      sparkleChampagneGlass().buildGraphql<TProductDraft>();
    expect(sparkleChampagneGlassPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
