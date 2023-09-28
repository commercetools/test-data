import type { TProductDraft } from '../../../types';
import iceBucket from './ice-bucket';
import productDraft from './ice-bucket.spec.json';

describe(`with iceBucket preset`, () => {
  it(`should return a iceBucket preset`, () => {
    const iceBucketPreset = iceBucket().build<TProductDraft>();
    expect(iceBucketPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a iceBucket preset when built for graphql`, () => {
    const iceBucketPresetGraphql = iceBucket().buildGraphql<TProductDraft>();
    expect(iceBucketPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
