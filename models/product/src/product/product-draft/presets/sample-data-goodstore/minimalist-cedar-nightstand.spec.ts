import type { TProductDraft } from '../../../types';
import minimalistCedarNightstand from './minimalist-cedar-nightstand';
import productDraft from './minimalist-cedar-nightstand.spec.json';

describe(`with minimalistCedarNightstand preset`, () => {
  it(`should return a minimalistCedarNightstand preset`, () => {
    const minimalistCedarNightstandPreset =
      minimalistCedarNightstand().build<TProductDraft>();
    expect(minimalistCedarNightstandPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a minimalistCedarNightstand preset when built for graphql`, () => {
    const minimalistCedarNightstandPresetGraphql =
      minimalistCedarNightstand().buildGraphql<TProductDraft>();
    expect(minimalistCedarNightstandPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
