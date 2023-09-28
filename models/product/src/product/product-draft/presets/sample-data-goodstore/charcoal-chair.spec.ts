import type { TProductDraft } from '../../../types';
import charcoalChair from './charcoal-chair';
import productDraft from './charcoal-chair.spec.json';

describe(`with charcoalChair preset`, () => {
  it(`should return a charcoalChair preset`, () => {
    const charcoalChairPreset = charcoalChair().build<TProductDraft>();
    expect(charcoalChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a charcoalChair preset when built for graphql`, () => {
    const charcoalChairPresetGraphql =
      charcoalChair().buildGraphql<TProductDraft>();
    expect(charcoalChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
