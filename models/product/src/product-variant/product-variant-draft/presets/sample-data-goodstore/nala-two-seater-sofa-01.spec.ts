import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa01 from './nala-two-seater-sofa-01';

describe(`with nalaTwoSeaterSofa01 preset`, () => {
  it(`should return a nalaTwoSeaterSofa01 preset`, () => {
    const nalaTwoSeaterSofa01Preset =
      nalaTwoSeaterSofa01().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa01 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa01PresetGraphql =
      nalaTwoSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
