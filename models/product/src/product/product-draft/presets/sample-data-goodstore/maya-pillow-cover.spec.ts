import type { TProductDraft } from '../../../types';
import mayaPillowCover from './maya-pillow-cover';
import productDraft from './maya-pillow-cover.spec.json';

describe(`with mayaPillowCover preset`, () => {
  it(`should return a mayaPillowCover preset`, () => {
    const mayaPillowCoverPreset = mayaPillowCover().build<TProductDraft>();
    expect(mayaPillowCoverPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a mayaPillowCover preset when built for graphql`, () => {
    const mayaPillowCoverPresetGraphql =
      mayaPillowCover().buildGraphql<TProductDraft>();
    expect(mayaPillowCoverPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
