import type { TProductDraft } from '../../../types';
import canelaThreeSeaterSofa from './canela-three-seater-sofa';
import productDraft from './canela-three-seater-sofa.spec.json';

describe(`with canelaThreeSeaterSofa preset`, () => {
  it(`should return a canelaThreeSeaterSofa preset`, () => {
    const canelaThreeSeaterSofaPreset =
      canelaThreeSeaterSofa().build<TProductDraft>();
    expect(canelaThreeSeaterSofaPreset).toMatchObject(productDraft.rest);
  });
});
