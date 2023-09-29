import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernBlackCoaster01 from './modern-black-coaster-01';

describe(`with modernBlackCoaster01 preset`, () => {
  it(`should return a modernBlackCoaster01 preset`, () => {
    const modernBlackCoaster01Preset =
      modernBlackCoaster01().build<TProductVariantDraft>();
    expect(modernBlackCoaster01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernBlackCoaster01 preset when built for graphql`, () => {
    const modernBlackCoaster01PresetGraphql =
      modernBlackCoaster01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernBlackCoaster01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
