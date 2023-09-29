import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernThreeSeaterSofa01 from './modern-three-seater-sofa-01';

describe(`with modernThreeSeaterSofa01 preset`, () => {
  it(`should return a modernThreeSeaterSofa01 preset`, () => {
    const modernThreeSeaterSofa01Preset =
      modernThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(modernThreeSeaterSofa01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernThreeSeaterSofa01 preset when built for graphql`, () => {
    const modernThreeSeaterSofa01PresetGraphql =
      modernThreeSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
