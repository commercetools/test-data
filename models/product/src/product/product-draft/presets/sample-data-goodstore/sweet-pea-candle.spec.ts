import type { TProductDraft } from '../../../types';
import sweetPeaCandle from './sweet-pea-candle';
import productDraft from './sweet-pea-candle.spec.json';

describe(`with sweetPeaCandle preset`, () => {
  it(`should return a sweetPeaCandle preset`, () => {
    const sweetPeaCandlePreset = sweetPeaCandle().build<TProductDraft>();
    expect(sweetPeaCandlePreset).toMatchObject(productDraft.rest);
  });
});
