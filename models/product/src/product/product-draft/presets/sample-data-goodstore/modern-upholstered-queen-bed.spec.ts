import type { TProductDraft } from '../../../types';
import modernUpholsteredQueenBed from './modern-upholstered-queen-bed';
import productDraft from './modern-upholstered-queen-bed.spec.json';

describe(`with modernUpholsteredQueenBed preset`, () => {
  it(`should return a modernUpholsteredQueenBed preset`, () => {
    const modernUpholsteredQueenBedPreset =
      modernUpholsteredQueenBed().build<TProductDraft>();
    expect(modernUpholsteredQueenBedPreset).toMatchObject(productDraft.rest);
  });
});
