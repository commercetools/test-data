import type { TProductDraft } from '../../../types';
import abigailLoungeChair from './abigail-lounge-chair';
import productDraft from './abigail-lounge-chair.spec.json';

describe(`with abigailLoungeChair preset`, () => {
  it(`should return a abigailLoungeChair preset`, () => {
    const abigailLoungeChairPreset =
      abigailLoungeChair().build<TProductDraft>();
    expect(abigailLoungeChairPreset).toMatchObject(productDraft.rest);
  });
});
