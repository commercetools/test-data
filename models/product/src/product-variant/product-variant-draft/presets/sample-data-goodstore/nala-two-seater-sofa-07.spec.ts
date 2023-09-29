import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa07 from './nala-two-seater-sofa-07';

describe(`with nalaTwoSeaterSofa07 preset`, () => {
  it(`should return a nalaTwoSeaterSofa07 preset`, () => {
    const nalaTwoSeaterSofa07Preset =
      nalaTwoSeaterSofa07().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa07Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa07 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa07PresetGraphql =
      nalaTwoSeaterSofa07().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa07PresetGraphql).toMatchInlineSnapshot(``);
  });
});
