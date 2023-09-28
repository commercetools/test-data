import type { TProductDraft } from '../../../types';
import cloudQueenBed from './cloud-queen-bed';
import productDraft from './cloud-queen-bed.spec.json';

describe(`with cloudQueenBed preset`, () => {
  it(`should return a cloudQueenBed preset`, () => {
    const cloudQueenBedPreset = cloudQueenBed().build<TProductDraft>();
    expect(cloudQueenBedPreset).toMatchObject(productDraft.rest);
  });
});
