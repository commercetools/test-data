import type { TProductDraft } from '../../../types';
import modernCeramicPlate from './modern-ceramic-plate';
import productDraft from './modern-ceramic-plate.spec.json';

describe(`with modernCeramicPlate preset`, () => {
  it(`should return a modernCeramicPlate preset`, () => {
    const modernCeramicPlatePreset =
      modernCeramicPlate().build<TProductDraft>();
    expect(modernCeramicPlatePreset).toMatchObject(productDraft);
  });
});
