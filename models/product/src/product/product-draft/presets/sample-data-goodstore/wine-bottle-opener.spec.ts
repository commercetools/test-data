import type { TProductDraft } from '../../../types';
import wineBottleOpener from './wine-bottle-opener';
import productDraft from './wine-bottle-opener.spec.json';

describe(`with wineBottleOpener preset`, () => {
  it(`should return a wineBottleOpener preset`, () => {
    const wineBottleOpenerPreset = wineBottleOpener().build<TProductDraft>();
    expect(wineBottleOpenerPreset).toMatchObject(productDraft);
  });
});
