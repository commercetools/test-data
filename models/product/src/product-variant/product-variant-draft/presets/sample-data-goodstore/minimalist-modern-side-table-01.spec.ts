import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistModernSideTable01 from './minimalist-modern-side-table-01';

describe(`with minimalistModernSideTable01 preset`, () => {
  it(`should return a minimalistModernSideTable01 preset`, () => {
    const minimalistModernSideTable01Preset =
      minimalistModernSideTable01().build<TProductVariantDraft>();
    expect(minimalistModernSideTable01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a minimalistModernSideTable01 preset when built for graphql`, () => {
    const minimalistModernSideTable01PresetGraphql =
      minimalistModernSideTable01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistModernSideTable01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
