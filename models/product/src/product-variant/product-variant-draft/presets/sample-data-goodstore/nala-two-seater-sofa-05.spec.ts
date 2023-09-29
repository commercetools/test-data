import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa05 from './nala-two-seater-sofa-05';

describe(`with nalaTwoSeaterSofa05 preset`, () => {
  it(`should return a nalaTwoSeaterSofa05 preset`, () => {
    const nalaTwoSeaterSofa05Preset =
      nalaTwoSeaterSofa05().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa05Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa05 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa05PresetGraphql =
      nalaTwoSeaterSofa05().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa05PresetGraphql).toMatchInlineSnapshot(``);
  });
});
