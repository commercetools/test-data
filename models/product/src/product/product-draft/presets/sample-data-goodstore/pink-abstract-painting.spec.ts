import type { TProductDraft } from '../../../types';
import pinkAbstractPainting from './pink-abstract-painting';

describe(`with pinkAbstractPainting preset`, () => {
  it(`should return a pinkAbstractPainting preset`, () => {
    const pinkAbstractPaintingPreset =
      pinkAbstractPainting().build<TProductDraft>();
    expect(pinkAbstractPaintingPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a pinkAbstractPainting preset when built for graphql`, () => {
    const pinkAbstractPaintingPresetGraphql =
      pinkAbstractPainting().buildGraphql<TProductDraft>();
    expect(pinkAbstractPaintingPresetGraphql).toMatchInlineSnapshot(``);
  });
});
