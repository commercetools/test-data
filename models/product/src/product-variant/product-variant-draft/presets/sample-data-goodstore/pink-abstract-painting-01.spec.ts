import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import pinkAbstractPainting01 from './pink-abstract-painting-01';

describe(`with pinkAbstractPainting01 preset`, () => {
  it(`should return a pinkAbstractPainting01 preset`, () => {
    const pinkAbstractPainting01Preset =
      pinkAbstractPainting01().build<TProductVariantDraft>();
    expect(pinkAbstractPainting01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a pinkAbstractPainting01 preset when built for graphql`, () => {
    const pinkAbstractPainting01PresetGraphql =
      pinkAbstractPainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(pinkAbstractPainting01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
