import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import purpleLandscapePainting01 from './purple-landscape-painting-01';

describe(`with purpleLandscapePainting01 preset`, () => {
  it(`should return a purpleLandscapePainting01 preset`, () => {
    const purpleLandscapePainting01Preset =
      purpleLandscapePainting01().build<TProductVariantDraft>();
    expect(purpleLandscapePainting01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a purpleLandscapePainting01 preset when built for graphql`, () => {
    const purpleLandscapePainting01PresetGraphql =
      purpleLandscapePainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(purpleLandscapePainting01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
