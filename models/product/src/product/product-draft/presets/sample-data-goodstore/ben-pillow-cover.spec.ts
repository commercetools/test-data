import type { TProductDraft } from '../../../types';
import benPillowCover from './ben-pillow-cover';
import productDraft from './ben-pillow-cover.spec.json';

describe(`with benPillowCover preset`, () => {
  it(`should return a benPillowCover preset`, () => {
    const benPillowCoverPreset = benPillowCover().build<TProductDraft>();
    expect(benPillowCoverPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a benPillowCover preset when built for graphql`, () => {
    const benPillowCoverPresetGraphql =
      benPillowCover().buildGraphql<TProductDraft>();
    expect(benPillowCoverPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
