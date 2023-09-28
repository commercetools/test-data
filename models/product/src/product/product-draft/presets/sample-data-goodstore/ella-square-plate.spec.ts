import type { TProductDraft } from '../../../types';
import ellaSquarePlate from './ella-square-plate';
import productDraft from './ella-square-plate.spec.json';

describe(`with ellaSquarePlate preset`, () => {
  it(`should return a ellaSquarePlate preset`, () => {
    const ellaSquarePlatePreset = ellaSquarePlate().build<TProductDraft>();
    expect(ellaSquarePlatePreset).toMatchObject(productDraft);
  });
});
