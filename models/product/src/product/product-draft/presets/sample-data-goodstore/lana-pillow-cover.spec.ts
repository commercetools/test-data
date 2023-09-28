import type { TProductDraft } from '../../../types';
import lanaPillowCover from './lana-pillow-cover';
import productDraft from './lana-pillow-cover.spec.json';

describe(`with lanaPillowCover preset`, () => {
  it(`should return a lanaPillowCover preset`, () => {
    const lanaPillowCoverPreset = lanaPillowCover().build<TProductDraft>();
    expect(lanaPillowCoverPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a lanaPillowCover preset when built for graphql`, () => {
    const lanaPillowCoverPresetGraphql =
      lanaPillowCover().buildGraphql<TProductDraft>();
    expect(lanaPillowCoverPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
