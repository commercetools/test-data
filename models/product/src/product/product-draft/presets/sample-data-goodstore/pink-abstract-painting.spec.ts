import type { TProductDraft } from '../../../types';
import pinkAbstractPainting from './pink-abstract-painting';
import productDraft from './pink-abstract-painting.spec.json';

describe(`with pinkAbstractPainting preset`, () => {
  it(`should return a pinkAbstractPainting preset`, () => {
    const pinkAbstractPaintingPreset =
      pinkAbstractPainting().build<TProductDraft>();
    expect(pinkAbstractPaintingPreset).toMatchObject(productDraft);
  });
});
