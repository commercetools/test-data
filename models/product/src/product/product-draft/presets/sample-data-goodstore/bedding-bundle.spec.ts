import type { TProductDraft } from '../../../types';
import beddingBundle from './bedding-bundle';
import productDraft from './bedding-bundle.spec.json';

describe(`with beddingBundle preset`, () => {
  it(`should return a beddingBundle preset`, () => {
    const beddingBundlePreset = beddingBundle().build<TProductDraft>();
    expect(beddingBundlePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a beddingBundle preset when built for graphql`, () => {
    const beddingBundlePresetGraphql =
      beddingBundle().buildGraphql<TProductDraft>();
    expect(beddingBundlePresetGraphql).toMatchObject(productDraft.graphql);
  });
});
