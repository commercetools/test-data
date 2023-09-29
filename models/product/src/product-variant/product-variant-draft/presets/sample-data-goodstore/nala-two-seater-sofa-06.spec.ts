import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa06 from './nala-two-seater-sofa-06';

describe(`with nalaTwoSeaterSofa06 preset`, () => {
  it(`should return a nalaTwoSeaterSofa06 preset`, () => {
    const nalaTwoSeaterSofa06Preset =
      nalaTwoSeaterSofa06().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa06Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa06 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa06PresetGraphql =
      nalaTwoSeaterSofa06().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa06PresetGraphql).toMatchInlineSnapshot(``);
  });
});
