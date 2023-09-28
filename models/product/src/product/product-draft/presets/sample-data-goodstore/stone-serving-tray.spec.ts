import type { TProductDraft } from '../../../types';
import stoneServingTray from './stone-serving-tray';
import productDraft from './stone-serving-tray.spec.json';

describe(`with stoneServingTray preset`, () => {
  it(`should return a stoneServingTray preset`, () => {
    const stoneServingTrayPreset = stoneServingTray().build<TProductDraft>();
    expect(stoneServingTrayPreset).toMatchObject(productDraft.rest);
  });
});
