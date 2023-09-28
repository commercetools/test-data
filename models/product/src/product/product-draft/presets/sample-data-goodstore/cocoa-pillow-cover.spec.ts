import type { TProductDraft } from '../../../types';
import cocoaPillowCover from './cocoa-pillow-cover';
import productDraft from './cocoa-pillow-cover.spec.json';

describe(`with cocoaPillowCover preset`, () => {
  it(`should return a cocoaPillowCover preset`, () => {
    const cocoaPillowCoverPreset = cocoaPillowCover().build<TProductDraft>();
    expect(cocoaPillowCoverPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cocoaPillowCover preset when built for graphql`, () => {
    const cocoaPillowCoverPresetGraphql =
      cocoaPillowCover().buildGraphql<TProductDraft>();
    expect(cocoaPillowCoverPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
