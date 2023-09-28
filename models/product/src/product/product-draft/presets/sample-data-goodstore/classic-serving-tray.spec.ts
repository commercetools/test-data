import type { TProductDraft } from '../../../types';
import classicServingTray from './classic-serving-tray';
import productDraft from './classic-serving-tray.spec.json';

describe(`with classicServingTray preset`, () => {
  it(`should return a classicServingTray preset`, () => {
    const classicServingTrayPreset =
      classicServingTray().build<TProductDraft>();
    expect(classicServingTrayPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a classicServingTray preset when built for graphql`, () => {
    const classicServingTrayPresetGraphql =
      classicServingTray().buildGraphql<TProductDraft>();
    expect(classicServingTrayPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
