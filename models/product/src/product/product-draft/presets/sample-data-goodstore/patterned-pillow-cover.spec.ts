import type { TProductDraft } from '../../../types';
import patternedPillowCover from './patterned-pillow-cover';
import productDraft from './patterned-pillow-cover.spec.json';

describe(`with patternedPillowCover preset`, () => {
  it(`should return a patternedPillowCover preset`, () => {
    const patternedPillowCoverPreset =
      patternedPillowCover().build<TProductDraft>();
    expect(patternedPillowCoverPreset).toMatchObject(productDraft);
  });
});
