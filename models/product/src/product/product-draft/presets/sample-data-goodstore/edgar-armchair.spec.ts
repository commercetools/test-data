import type { TProductDraft } from '../../../types';
import edgarArmchair from './edgar-armchair';
import productDraft from './edgar-armchair.spec.json';

describe(`with edgarArmchair preset`, () => {
  it(`should return a edgarArmchair preset`, () => {
    const edgarArmchairPreset = edgarArmchair().build<TProductDraft>();
    expect(edgarArmchairPreset).toMatchObject(productDraft.rest);
  });
});
