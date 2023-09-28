import type { TProductDraft } from '../../../types';
import braidedRug from './braided-rug';
import productDraft from './braided-rug.spec.json';

describe(`with braidedRug preset`, () => {
  it(`should return a braidedRug preset`, () => {
    const braidedRugPreset = braidedRug().build<TProductDraft>();
    expect(braidedRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a braidedRug preset when built for graphql`, () => {
    const braidedRugPresetGraphql = braidedRug().buildGraphql<TProductDraft>();
    expect(braidedRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
