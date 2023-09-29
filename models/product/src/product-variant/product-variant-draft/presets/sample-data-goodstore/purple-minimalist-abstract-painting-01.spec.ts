import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import purpleMinimalistAbstractPainting01 from './purple-minimalist-abstract-painting-01';

describe(`with purpleMinimalistAbstractPainting01 preset`, () => {
  it(`should return a purpleMinimalistAbstractPainting01 preset`, () => {
    const purpleMinimalistAbstractPainting01Preset =
      purpleMinimalistAbstractPainting01().build<TProductVariantDraft>();
    expect(purpleMinimalistAbstractPainting01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a purpleMinimalistAbstractPainting01 preset when built for graphql`, () => {
    const purpleMinimalistAbstractPainting01PresetGraphql =
      purpleMinimalistAbstractPainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(
      purpleMinimalistAbstractPainting01PresetGraphql
    ).toMatchInlineSnapshot(``);
  });
});
