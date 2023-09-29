import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import patternedPillowCover01 from './patterned-pillow-cover-01';

describe(`with patternedPillowCover01 preset`, () => {
  it(`should return a patternedPillowCover01 preset`, () => {
    const patternedPillowCover01Preset =
      patternedPillowCover01().build<TProductVariantDraft>();
    expect(patternedPillowCover01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a patternedPillowCover01 preset when built for graphql`, () => {
    const patternedPillowCover01PresetGraphql =
      patternedPillowCover01().buildGraphql<TProductVariantDraftGraphql>();
    expect(patternedPillowCover01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
