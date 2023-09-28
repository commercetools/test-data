import type { TProductDraft } from '../../../types';
import ivoryPlate from './ivory-plate';
import productDraft from './ivory-plate.spec.json';

describe(`with ivoryPlate preset`, () => {
  it(`should return a ivoryPlate preset`, () => {
    const ivoryPlatePreset = ivoryPlate().build<TProductDraft>();
    expect(ivoryPlatePreset).toMatchObject(productDraft.rest);
  });
});
