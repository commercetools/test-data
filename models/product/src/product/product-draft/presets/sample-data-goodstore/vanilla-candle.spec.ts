import type { TProductDraft } from '../../../types';
import vanillaCandle from './vanilla-candle';

describe(`with vanillaCandle preset`, () => {
  it(`should return a vanillaCandle preset`, () => {
    const vanillaCandlePreset = vanillaCandle().build<TProductDraft>();
    expect(vanillaCandlePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a vanillaCandle preset when built for graphql`, () => {
    const vanillaCandlePresetGraphql =
      vanillaCandle().buildGraphql<TProductDraft>();
    expect(vanillaCandlePresetGraphql).toMatchInlineSnapshot(``);
  });
});
