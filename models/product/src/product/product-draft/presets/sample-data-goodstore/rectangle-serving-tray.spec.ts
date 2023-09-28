import type { TProductDraft } from '../../../types';
import rectangleServingTray from './rectangle-serving-tray';
import productDraft from './rectangle-serving-tray.spec.json';

describe(`with rectangleServingTray preset`, () => {
  it(`should return a rectangleServingTray preset`, () => {
    const rectangleServingTrayPreset =
      rectangleServingTray().build<TProductDraft>();
    expect(rectangleServingTrayPreset).toMatchObject(productDraft);
  });
});
