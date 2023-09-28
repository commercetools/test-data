import type { TProductDraft } from '../../../types';
import traditionalLSeaterSofa from './traditional-l-seater-sofa';
import productDraft from './traditional-l-seater-sofa.spec.json';

describe(`with traditionalLSeaterSofa preset`, () => {
  it(`should return a traditionalLSeaterSofa preset`, () => {
    const traditionalLSeaterSofaPreset =
      traditionalLSeaterSofa().build<TProductDraft>();
    expect(traditionalLSeaterSofaPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a traditionalLSeaterSofa preset when built for graphql`, () => {
    const traditionalLSeaterSofaPresetGraphql =
      traditionalLSeaterSofa().buildGraphql<TProductDraft>();
    expect(traditionalLSeaterSofaPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
