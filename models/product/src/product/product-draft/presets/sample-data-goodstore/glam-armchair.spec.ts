import type { TProductDraft } from '../../../types';
import glamArmchair from './glam-armchair';
import productDraft from './glam-armchair.spec.json';

describe(`with glamArmchair preset`, () => {
  it(`should return a glamArmchair preset`, () => {
    const glamArmchairPreset = glamArmchair().build<TProductDraft>();
    expect(glamArmchairPreset).toMatchObject(productDraft);
  });
});
