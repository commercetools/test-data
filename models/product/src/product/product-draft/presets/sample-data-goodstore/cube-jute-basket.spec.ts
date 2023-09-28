import type { TProductDraft } from '../../../types';
import cubeJuteBasket from './cube-jute-basket';
import productDraft from './cube-jute-basket.spec.json';

describe(`with cubeJuteBasket preset`, () => {
  it(`should return a cubeJuteBasket preset`, () => {
    const cubeJuteBasketPreset = cubeJuteBasket().build<TProductDraft>();
    expect(cubeJuteBasketPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cubeJuteBasket preset when built for graphql`, () => {
    const cubeJuteBasketPresetGraphql =
      cubeJuteBasket().buildGraphql<TProductDraft>();
    expect(cubeJuteBasketPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
