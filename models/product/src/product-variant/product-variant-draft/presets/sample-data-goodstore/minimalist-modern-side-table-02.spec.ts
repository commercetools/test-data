import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistModernSideTable02 from './minimalist-modern-side-table-02';

describe(`with minimalistModernSideTable02 preset`, () => {
  it(`should return a minimalistModernSideTable02 preset`, () => {
    const minimalistModernSideTable02Preset =
      minimalistModernSideTable02().build<TProductVariantDraft>();
    expect(minimalistModernSideTable02Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a minimalistModernSideTable02 preset when built for graphql`, () => {
    const minimalistModernSideTable02PresetGraphql =
      minimalistModernSideTable02().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistModernSideTable02PresetGraphql).toMatchInlineSnapshot(``);
  });
});
