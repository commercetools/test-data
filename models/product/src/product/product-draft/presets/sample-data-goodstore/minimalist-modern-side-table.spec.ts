import type { TProductDraft } from '../../../types';
import minimalistModernSideTable from './minimalist-modern-side-table';
import productDraft from './minimalist-modern-side-table.spec.json';

describe(`with minimalistModernSideTable preset`, () => {
  it(`should return a minimalistModernSideTable preset`, () => {
    const minimalistModernSideTablePreset =
      minimalistModernSideTable().build<TProductDraft>();
    expect(minimalistModernSideTablePreset).toMatchObject(productDraft.rest);
  });
});
