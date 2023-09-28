import type { TProductDraft } from '../../../types';
import goldRimmedChampagneGlasses from './gold-rimmed-champagne-glasses';
import productDraft from './gold-rimmed-champagne-glasses.spec.json';

describe(`with goldRimmedChampagneGlasses preset`, () => {
  it(`should return a goldRimmedChampagneGlasses preset`, () => {
    const goldRimmedChampagneGlassesPreset =
      goldRimmedChampagneGlasses().build<TProductDraft>();
    expect(goldRimmedChampagneGlassesPreset).toMatchObject(productDraft.rest);
  });
});
