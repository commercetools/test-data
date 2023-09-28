import type { TProductDraft } from '../../../types';
import brunoChair from './bruno-chair';
import productDraft from './bruno-chair.spec.json';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductDraft>();
    expect(brunoChairPreset).toMatchObject(productDraft.rest);
  });
});
