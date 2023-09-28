import type { TProductDraft } from '../../../types';
import nalaTwoSeaterSofa from './nala-two-seater-sofa';
import productDraft from './nala-two-seater-sofa.spec.json';

describe(`with nalaTwoSeaterSofa preset`, () => {
  it(`should return a nalaTwoSeaterSofa preset`, () => {
    const nalaTwoSeaterSofaPreset = nalaTwoSeaterSofa().build<TProductDraft>();
    expect(nalaTwoSeaterSofaPreset).toMatchObject(productDraft.rest);
  });
});
