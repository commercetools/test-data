import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa04 from './nala-two-seater-sofa-04';

describe(`with nalaTwoSeaterSofa04 preset`, () => {
  it(`should return a nalaTwoSeaterSofa04 preset`, () => {
    const nalaTwoSeaterSofa04Preset =
      nalaTwoSeaterSofa04().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa04Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa04 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa04PresetGraphql =
      nalaTwoSeaterSofa04().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa04PresetGraphql).toMatchInlineSnapshot(``);
  });
});
