import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa02 from './nala-two-seater-sofa-02';

describe(`with nalaTwoSeaterSofa02 preset`, () => {
  it(`should return a nalaTwoSeaterSofa02 preset`, () => {
    const nalaTwoSeaterSofa02Preset =
      nalaTwoSeaterSofa02().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa02Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa02 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa02PresetGraphql =
      nalaTwoSeaterSofa02().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa02PresetGraphql).toMatchInlineSnapshot(``);
  });
});
