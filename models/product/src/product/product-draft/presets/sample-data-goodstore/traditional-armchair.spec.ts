import type { TProductDraft } from '../../../types';
import traditionalArmchair from './traditional-armchair';
import productDraft from './traditional-armchair.spec.json';

describe(`with traditionalArmchair preset`, () => {
  it(`should return a traditionalArmchair preset`, () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchObject(productDraft);
  });
});
