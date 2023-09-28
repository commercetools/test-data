import type { TProductDraft } from '../../../types';
import modernThreeSeaterSofa from './modern-three-seater-sofa';
import productDraft from './modern-three-seater-sofa.spec.json';

describe(`with modernThreeSeaterSofa preset`, () => {
  it(`should return a modernThreeSeaterSofa preset`, () => {
    const modernThreeSeaterSofaPreset =
      modernThreeSeaterSofa().build<TProductDraft>();
    expect(modernThreeSeaterSofaPreset).toMatchObject(productDraft);
  });
});
