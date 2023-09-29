import type { TProductDraft } from '../../../types';
import stoneServingTray from './stone-serving-tray';

describe(`with stoneServingTray preset`, () => {
  it(`should return a stoneServingTray preset`, () => {
    const stoneServingTrayPreset = stoneServingTray().build<TProductDraft>();
    expect(stoneServingTrayPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a stoneServingTray preset when built for graphql`, () => {
    const stoneServingTrayPresetGraphql =
      stoneServingTray().buildGraphql<TProductDraft>();
    expect(stoneServingTrayPresetGraphql).toMatchInlineSnapshot(``);
  });
});
