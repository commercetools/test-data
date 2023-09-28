import type { TProductDraft } from '../../../types';
import wilmaChair from './wilma-chair';
import productDraft from './wilma-chair.spec.json';

describe(`with wilmaChair preset`, () => {
  it(`should return a wilmaChair preset`, () => {
    const wilmaChairPreset = wilmaChair().build<TProductDraft>();
    expect(wilmaChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a wilmaChair preset when built for graphql`, () => {
    const wilmaChairPresetGraphql = wilmaChair().buildGraphql<TProductDraft>();
    expect(wilmaChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
