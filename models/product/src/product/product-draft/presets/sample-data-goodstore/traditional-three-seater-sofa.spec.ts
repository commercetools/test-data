import type { TProductDraft } from '../../../types';
import traditionalThreeSeaterSofa from './traditional-three-seater-sofa';

describe(`with traditionalThreeSeaterSofa preset`, () => {
  it(`should return a traditionalThreeSeaterSofa preset`, () => {
    const traditionalThreeSeaterSofaPreset =
      traditionalThreeSeaterSofa().build<TProductDraft>();
    expect(traditionalThreeSeaterSofaPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a traditionalThreeSeaterSofa preset when built for graphql`, () => {
    const traditionalThreeSeaterSofaPresetGraphql =
      traditionalThreeSeaterSofa().buildGraphql<TProductDraft>();
    expect(traditionalThreeSeaterSofaPresetGraphql).toMatchInlineSnapshot(``);
  });
});
