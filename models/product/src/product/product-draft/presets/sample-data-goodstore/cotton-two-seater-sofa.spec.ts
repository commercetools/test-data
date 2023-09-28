import type { TProductDraft } from '../../../types';
import cottonTwoSeaterSofa from './cotton-two-seater-sofa';
import productDraft from './cotton-two-seater-sofa.spec.json';

describe(`with cottonTwoSeaterSofa preset`, () => {
  it(`should return a cottonTwoSeaterSofa preset`, () => {
    const cottonTwoSeaterSofaPreset =
      cottonTwoSeaterSofa().build<TProductDraft>();
    expect(cottonTwoSeaterSofaPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cottonTwoSeaterSofa preset when built for graphql`, () => {
    const cottonTwoSeaterSofaPresetGraphql =
      cottonTwoSeaterSofa().buildGraphql<TProductDraft>();
    expect(cottonTwoSeaterSofaPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
