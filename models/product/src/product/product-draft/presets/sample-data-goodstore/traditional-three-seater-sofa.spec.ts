import type { TProductDraft } from '../../../types';
import traditionalThreeSeaterSofa from './traditional-three-seater-sofa';
import productDraft from './traditional-three-seater-sofa.spec.json';

describe(`with traditionalThreeSeaterSofa preset`, () => {
  it(`should return a traditionalThreeSeaterSofa preset`, () => {
    const traditionalThreeSeaterSofaPreset =
      traditionalThreeSeaterSofa().build<TProductDraft>();
    expect(traditionalThreeSeaterSofaPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a traditionalThreeSeaterSofa preset when built for graphql`, () => {
    const traditionalThreeSeaterSofaPresetGraphql =
      traditionalThreeSeaterSofa().buildGraphql<TProductDraft>();
    expect(traditionalThreeSeaterSofaPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
