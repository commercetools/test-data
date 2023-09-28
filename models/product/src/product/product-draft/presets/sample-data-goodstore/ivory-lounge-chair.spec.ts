import type { TProductDraft } from '../../../types';
import ivoryLoungeChair from './ivory-lounge-chair';
import productDraft from './ivory-lounge-chair.spec.json';

describe(`with ivoryLoungeChair preset`, () => {
  it(`should return a ivoryLoungeChair preset`, () => {
    const ivoryLoungeChairPreset = ivoryLoungeChair().build<TProductDraft>();
    expect(ivoryLoungeChairPreset).toMatchObject(productDraft.rest);
  });
});
