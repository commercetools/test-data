import type { TProductDraft } from '../../../types';
import wineBottleOpener from './wine-bottle-opener';

describe(`with wineBottleOpener preset`, () => {
  it(`should return a wineBottleOpener preset`, () => {
    const wineBottleOpenerPreset = wineBottleOpener().build<TProductDraft>();
    expect(wineBottleOpenerPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a wineBottleOpener preset when built for graphql`, () => {
    const wineBottleOpenerPresetGraphql =
      wineBottleOpener().buildGraphql<TProductDraft>();
    expect(wineBottleOpenerPresetGraphql).toMatchInlineSnapshot(``);
  });
});
