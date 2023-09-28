import type { TProductDraft } from '../../../types';
import serenityQueenBed from './serenity-queen-bed';
import productDraft from './serenity-queen-bed.spec.json';

describe(`with serenityQueenBed preset`, () => {
  it(`should return a serenityQueenBed preset`, () => {
    const serenityQueenBedPreset = serenityQueenBed().build<TProductDraft>();
    expect(serenityQueenBedPreset).toMatchObject(productDraft.rest);
  });
});
