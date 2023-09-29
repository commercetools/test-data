import type { TProductDraft } from '../../../types';
import sweetPeaCandle from './sweet-pea-candle';

describe(`with sweetPeaCandle preset`, () => {
  it(`should return a sweetPeaCandle preset`, () => {
    const sweetPeaCandlePreset = sweetPeaCandle().build<TProductDraft>();
    expect(sweetPeaCandlePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a sweetPeaCandle preset when built for graphql`, () => {
    const sweetPeaCandlePresetGraphql =
      sweetPeaCandle().buildGraphql<TProductDraft>();
    expect(sweetPeaCandlePresetGraphql).toMatchInlineSnapshot(``);
  });
});
