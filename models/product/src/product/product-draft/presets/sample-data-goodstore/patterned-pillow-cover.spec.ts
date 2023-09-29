import type { TProductDraft } from '../../../types';
import patternedPillowCover from './patterned-pillow-cover';

describe(`with patternedPillowCover preset`, () => {
  it(`should return a patternedPillowCover preset`, () => {
    const patternedPillowCoverPreset =
      patternedPillowCover().build<TProductDraft>();
    expect(patternedPillowCoverPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a patternedPillowCover preset when built for graphql`, () => {
    const patternedPillowCoverPresetGraphql =
      patternedPillowCover().buildGraphql<TProductDraft>();
    expect(patternedPillowCoverPresetGraphql).toMatchInlineSnapshot(``);
  });
});
