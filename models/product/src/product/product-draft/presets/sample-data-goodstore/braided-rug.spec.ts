import type { TProductDraft } from '../../../types';
import braidedRug from './braided-rug';
import productDraft from './braided-rug.spec.json';

describe(`with braidedRug preset`, () => {
  it(`should return a braidedRug preset`, () => {
    const braidedRugPreset = braidedRug().build<TProductDraft>();
    expect(braidedRugPreset).toMatchObject(productDraft.rest);
  });
});
