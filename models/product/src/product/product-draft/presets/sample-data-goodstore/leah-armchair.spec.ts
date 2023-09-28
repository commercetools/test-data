import type { TProductDraft } from '../../../types';
import leahArmchair from './leah-armchair';
import productDraft from './leah-armchair.spec.json';

describe(`with leahArmchair preset`, () => {
  it(`should return a leahArmchair preset`, () => {
    const leahArmchairPreset = leahArmchair().build<TProductDraft>();
    expect(leahArmchairPreset).toMatchObject(productDraft.rest);
  });
});
