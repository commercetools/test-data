import type { TProductDraft } from '../../../types';
import wilmaChair from './wilma-chair';

describe(`with wilmaChair preset`, () => {
  it(`should return a wilmaChair preset`, () => {
    const wilmaChairPreset = wilmaChair().build<TProductDraft>();
    expect(wilmaChairPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a wilmaChair preset when built for graphql`, () => {
    const wilmaChairPresetGraphql = wilmaChair().buildGraphql<TProductDraft>();
    expect(wilmaChairPresetGraphql).toMatchInlineSnapshot(``);
  });
});
