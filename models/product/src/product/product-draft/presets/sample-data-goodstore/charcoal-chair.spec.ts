import type { TProductDraft } from '../../../types';
import charcoalChair from './charcoal-chair';
import productDraft from './charcoal-chair.spec.json';

describe(`with charcoalChair preset`, () => {
  it(`should return a charcoalChair preset`, () => {
    const charcoalChairPreset = charcoalChair().build<TProductDraft>();
    expect(charcoalChairPreset).toMatchObject(productDraft.rest);
  });
});
