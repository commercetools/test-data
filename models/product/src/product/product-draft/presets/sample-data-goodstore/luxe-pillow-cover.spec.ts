import type { TProductDraft } from '../../../types';
import luxePillowCover from './luxe-pillow-cover';
import productDraft from './luxe-pillow-cover.spec.json';

describe(`with luxePillowCover preset`, () => {
  it(`should return a luxePillowCover preset`, () => {
    const luxePillowCoverPreset = luxePillowCover().build<TProductDraft>();
    expect(luxePillowCoverPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a luxePillowCover preset when built for graphql`, () => {
    const luxePillowCoverPresetGraphql =
      luxePillowCover().buildGraphql<TProductDraft>();
    expect(luxePillowCoverPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
