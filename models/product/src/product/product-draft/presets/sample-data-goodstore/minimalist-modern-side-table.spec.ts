import type { TProductDraft } from '../../../types';
import minimalistModernSideTable from './minimalist-modern-side-table';

describe(`with minimalistModernSideTable preset`, () => {
  it(`should return a minimalistModernSideTable preset`, () => {
    const minimalistModernSideTablePreset =
      minimalistModernSideTable().build<TProductDraft>();
    expect(minimalistModernSideTablePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a minimalistModernSideTable preset when built for graphql`, () => {
    const minimalistModernSideTablePresetGraphql =
      minimalistModernSideTable().buildGraphql<TProductDraft>();
    expect(minimalistModernSideTablePresetGraphql).toMatchInlineSnapshot(``);
  });
});
