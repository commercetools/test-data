import type { TProductDraft } from '../../../types';
import greenServingPlate from './green-serving-plate';
import productDraft from './green-serving-plate.spec.json';

describe(`with greenServingPlate preset`, () => {
  it(`should return a greenServingPlate preset`, () => {
    const greenServingPlatePreset = greenServingPlate().build<TProductDraft>();
    expect(greenServingPlatePreset).toMatchObject(productDraft.rest);
  });
});
