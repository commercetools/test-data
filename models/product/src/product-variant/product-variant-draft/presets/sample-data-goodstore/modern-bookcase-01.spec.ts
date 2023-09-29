import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernBookcase01 from './modern-bookcase-01';

describe(`with modernBookcase01 preset`, () => {
  it(`should return a modernBookcase01 preset`, () => {
    const modernBookcase01Preset =
      modernBookcase01().build<TProductVariantDraft>();
    expect(modernBookcase01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernBookcase01 preset when built for graphql`, () => {
    const modernBookcase01PresetGraphql =
      modernBookcase01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernBookcase01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
