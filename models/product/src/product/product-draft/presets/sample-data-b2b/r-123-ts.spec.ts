import type { TProductDraft } from '../../../types';
import r123Ts from './r-123-ts';

describe(`with r123Ts preset`, () => {
  it(`should return a r123Ts preset`, () => {
    const r123TsPreset = r123Ts().build<TProductDraft>();
    expect(r123TsPreset).toMatchInlineSnapshot();
  });

  it(`should return a r123Ts preset when built for graphql`, () => {
    const r123TsPresetGraphql = r123Ts().buildGraphql<TProductDraft>();
    expect(r123TsPresetGraphql).toMatchInlineSnapshot();
  });
});
