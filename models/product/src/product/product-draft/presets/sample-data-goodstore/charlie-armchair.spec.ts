import type { TProductDraft } from '../../../types';
import charlieArmchair from './charlie-armchair';
import productDraft from './charlie-armchair.spec.json';

describe(`with charlieArmchair preset`, () => {
  it(`should return a charlieArmchair preset`, () => {
    const charlieArmchairPreset = charlieArmchair().build<TProductDraft>();
    expect(charlieArmchairPreset).toMatchObject(productDraft.rest);
  });
});
