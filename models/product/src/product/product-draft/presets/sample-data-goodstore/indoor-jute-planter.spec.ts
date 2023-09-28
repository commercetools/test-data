import type { TProductDraft } from '../../../types';
import indoorJutePlanter from './indoor-jute-planter';
import productDraft from './indoor-jute-planter.spec.json';

describe(`with indoorJutePlanter preset`, () => {
  it(`should return a indoorJutePlanter preset`, () => {
    const indoorJutePlanterPreset = indoorJutePlanter().build<TProductDraft>();
    expect(indoorJutePlanterPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a indoorJutePlanter preset when built for graphql`, () => {
    const indoorJutePlanterPresetGraphql =
      indoorJutePlanter().buildGraphql<TProductDraft>();
    expect(indoorJutePlanterPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
