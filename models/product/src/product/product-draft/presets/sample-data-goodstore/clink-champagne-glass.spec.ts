import type { TProductDraft } from '../../../types';
import clinkChampagneGlass from './clink-champagne-glass';
import productDraft from './clink-champagne-glass.spec.json';

describe(`with clinkChampagneGlass preset`, () => {
  it(`should return a clinkChampagneGlass preset`, () => {
    const clinkChampagneGlassPreset =
      clinkChampagneGlass().build<TProductDraft>();
    expect(clinkChampagneGlassPreset).toMatchObject(productDraft.rest);
  });
});
