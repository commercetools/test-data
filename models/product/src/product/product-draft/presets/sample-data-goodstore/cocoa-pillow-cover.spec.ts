import type { TProductDraft } from '../../../types';
import cocoaPillowCover from './cocoa-pillow-cover';
import productDraft from './cocoa-pillow-cover.spec.json';

describe(`with cocoaPillowCover preset`, () => {
  it(`should return a cocoaPillowCover preset`, () => {
    const cocoaPillowCoverPreset = cocoaPillowCover().build<TProductDraft>();
    expect(cocoaPillowCoverPreset).toMatchObject(productDraft.rest);
  });
});
