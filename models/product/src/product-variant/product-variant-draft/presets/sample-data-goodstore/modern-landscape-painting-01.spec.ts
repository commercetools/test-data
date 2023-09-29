import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernLandscapePainting01 from './modern-landscape-painting-01';

describe(`with modernLandscapePainting01 preset`, () => {
  it(`should return a modernLandscapePainting01 preset`, () => {
    const modernLandscapePainting01Preset =
      modernLandscapePainting01().build<TProductVariantDraft>();
    expect(modernLandscapePainting01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernLandscapePainting01 preset when built for graphql`, () => {
    const modernLandscapePainting01PresetGraphql =
      modernLandscapePainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernLandscapePainting01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
