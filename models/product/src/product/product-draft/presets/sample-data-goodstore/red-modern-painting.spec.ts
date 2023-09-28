import type { TProductDraft } from '../../../types';
import redModernPainting from './red-modern-painting';
import productDraft from './red-modern-painting.spec.json';

describe(`with redModernPainting preset`, () => {
  it(`should return a redModernPainting preset`, () => {
    const redModernPaintingPreset = redModernPainting().build<TProductDraft>();
    expect(redModernPaintingPreset).toMatchObject(productDraft.rest);
  });
});
