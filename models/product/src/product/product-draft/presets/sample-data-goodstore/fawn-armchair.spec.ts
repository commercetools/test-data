import type { TProductDraft } from '../../../types';
import fawnArmchair from './fawn-armchair';
import productDraft from './fawn-armchair.spec.json';

describe(`with fawnArmchair preset`, () => {
  it(`should return a fawnArmchair preset`, () => {
    const fawnArmchairPreset = fawnArmchair().build<TProductDraft>();
    expect(fawnArmchairPreset).toMatchObject(productDraft.rest);
  });
});
