import type { TProductDraft } from '../../../types';
import traditionalLSeaterSofa from './traditional-l-seater-sofa';

describe(`with traditionalLSeaterSofa preset`, () => {
  it(`should return a traditionalLSeaterSofa preset`, () => {
    const traditionalLSeaterSofaPreset =
      traditionalLSeaterSofa().build<TProductDraft>();
    expect(traditionalLSeaterSofaPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a traditionalLSeaterSofa preset when built for graphql`, () => {
    const traditionalLSeaterSofaPresetGraphql =
      traditionalLSeaterSofa().buildGraphql<TProductDraft>();
    expect(traditionalLSeaterSofaPresetGraphql).toMatchInlineSnapshot(``);
  });
});
