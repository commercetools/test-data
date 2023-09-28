import type { TProductDraft } from '../../../types';
import classicChampagneGlasses from './classic-champagne-glasses';
import productDraft from './classic-champagne-glasses.spec.json';

describe(`with classicChampagneGlasses preset`, () => {
  it(`should return a classicChampagneGlasses preset`, () => {
    const classicChampagneGlassesPreset =
      classicChampagneGlasses().build<TProductDraft>();
    expect(classicChampagneGlassesPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a classicChampagneGlasses preset when built for graphql`, () => {
    const classicChampagneGlassesPresetGraphql =
      classicChampagneGlasses().buildGraphql<TProductDraft>();
    expect(classicChampagneGlassesPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
