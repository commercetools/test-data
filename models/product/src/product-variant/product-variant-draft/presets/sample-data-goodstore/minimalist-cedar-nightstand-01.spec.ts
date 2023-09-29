import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistCedarNightstand01 from './minimalist-cedar-nightstand-01';

describe(`with minimalistCedarNightstand01 preset`, () => {
  it(`should return a minimalistCedarNightstand01 preset`, () => {
    const minimalistCedarNightstand01Preset =
      minimalistCedarNightstand01().build<TProductVariantDraft>();
    expect(minimalistCedarNightstand01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a minimalistCedarNightstand01 preset when built for graphql`, () => {
    const minimalistCedarNightstand01PresetGraphql =
      minimalistCedarNightstand01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistCedarNightstand01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
