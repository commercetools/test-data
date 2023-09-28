import type { TProductDraft } from '../../../types';
import evergreenCandle from './evergreen-candle';
import productDraft from './evergreen-candle.spec.json';

describe(`with evergreenCandle preset`, () => {
  it(`should return a evergreenCandle preset`, () => {
    const evergreenCandlePreset = evergreenCandle().build<TProductDraft>();
    expect(evergreenCandlePreset).toMatchObject(productDraft.rest);
  });
});
