import type { TProductDraft } from '../../../types';
import vanillaCandle from './vanilla-candle';
import productDraft from './vanilla-candle.spec.json';

describe(`with vanillaCandle preset`, () => {
  it(`should return a vanillaCandle preset`, () => {
    const vanillaCandlePreset = vanillaCandle().build<TProductDraft>();
    expect(vanillaCandlePreset).toMatchObject(productDraft);
  });
});
