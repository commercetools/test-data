import type { TProductDraft } from '../../../types';
import slateArmchair from './slate-armchair';
import productDraft from './slate-armchair.spec.json';

describe(`with slateArmchair preset`, () => {
  it(`should return a slateArmchair preset`, () => {
    const slateArmchairPreset = slateArmchair().build<TProductDraft>();
    expect(slateArmchairPreset).toMatchObject(productDraft.rest);
  });
});
