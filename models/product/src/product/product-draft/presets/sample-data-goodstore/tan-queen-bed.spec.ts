import type { TProductDraft } from '../../../types';
import tanQueenBed from './tan-queen-bed';
import productDraft from './tan-queen-bed.spec.json';

describe(`with tanQueenBed preset`, () => {
  it(`should return a tanQueenBed preset`, () => {
    const tanQueenBedPreset = tanQueenBed().build<TProductDraft>();
    expect(tanQueenBedPreset).toMatchObject(productDraft.rest);
  });
});
