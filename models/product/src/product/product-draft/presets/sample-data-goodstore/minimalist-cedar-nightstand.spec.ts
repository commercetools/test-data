import type { TProductDraft } from '../../../types';
import minimalistCedarNightstand from './minimalist-cedar-nightstand';

describe(`with minimalistCedarNightstand preset`, () => {
  it(`should return a minimalistCedarNightstand preset`, () => {
    const minimalistCedarNightstandPreset =
      minimalistCedarNightstand().build<TProductDraft>();
    expect(minimalistCedarNightstandPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a minimalistCedarNightstand preset when built for graphql`, () => {
    const minimalistCedarNightstandPresetGraphql =
      minimalistCedarNightstand().buildGraphql<TProductDraft>();
    expect(minimalistCedarNightstandPresetGraphql).toMatchInlineSnapshot(``);
  });
});
