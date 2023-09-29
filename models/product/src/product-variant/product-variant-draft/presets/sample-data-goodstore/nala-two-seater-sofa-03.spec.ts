import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa03 from './nala-two-seater-sofa-03';

describe(`with nalaTwoSeaterSofa03 preset`, () => {
  it(`should return a nalaTwoSeaterSofa03 preset`, () => {
    const nalaTwoSeaterSofa03Preset =
      nalaTwoSeaterSofa03().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa03Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa03 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa03PresetGraphql =
      nalaTwoSeaterSofa03().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa03PresetGraphql).toMatchInlineSnapshot(``);
  });
});
