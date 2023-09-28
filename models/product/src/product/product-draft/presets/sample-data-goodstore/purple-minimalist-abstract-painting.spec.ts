import type { TProductDraft } from '../../../types';
import purpleMinimalistAbstractPainting from './purple-minimalist-abstract-painting';
import productDraft from './purple-minimalist-abstract-painting.spec.json';

describe(`with purpleMinimalistAbstractPainting preset`, () => {
  it(`should return a purpleMinimalistAbstractPainting preset`, () => {
    const purpleMinimalistAbstractPaintingPreset =
      purpleMinimalistAbstractPainting().build<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPreset).toMatchObject(productDraft);
  });
});
