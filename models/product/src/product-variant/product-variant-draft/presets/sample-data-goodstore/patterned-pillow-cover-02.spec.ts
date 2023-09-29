import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import patternedPillowCover02 from './patterned-pillow-cover-02';

describe(`with patternedPillowCover02 preset`, () => {
  it(`should return a patternedPillowCover02 preset`, () => {
    const patternedPillowCover02Preset =
      patternedPillowCover02().build<TProductVariantDraft>();
    expect(patternedPillowCover02Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a patternedPillowCover02 preset when built for graphql`, () => {
    const patternedPillowCover02PresetGraphql =
      patternedPillowCover02().buildGraphql<TProductVariantDraftGraphql>();
    expect(patternedPillowCover02PresetGraphql).toMatchInlineSnapshot(``);
  });
});
