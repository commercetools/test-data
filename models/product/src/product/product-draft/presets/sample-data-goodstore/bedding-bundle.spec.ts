import type { TProductDraft } from '../../../types';
import beddingBundle from './bedding-bundle';
import productDraft from './bedding-bundle.spec.json';

describe(`with beddingBundle preset`, () => {
  it(`should return a beddingBundle preset`, () => {
    const beddingBundlePreset = beddingBundle().build<TProductDraft>();
    expect(beddingBundlePreset).toMatchObject(productDraft);
  });
});
