import type { TProductDraft } from '../../../types';
import harvestPlate from './harvest-plate';
import productDraft from './harvest-plate.spec.json';

describe(`with harvestPlate preset`, () => {
  it(`should return a harvestPlate preset`, () => {
    const harvestPlatePreset = harvestPlate().build<TProductDraft>();
    expect(harvestPlatePreset).toMatchObject(productDraft);
  });
});
