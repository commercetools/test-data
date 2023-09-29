import type { TProductDraft } from '../../../types';
import purpleMinimalistAbstractPainting from './purple-minimalist-abstract-painting';

describe(`with purpleMinimalistAbstractPainting preset`, () => {
  it(`should return a purpleMinimalistAbstractPainting preset`, () => {
    const purpleMinimalistAbstractPaintingPreset =
      purpleMinimalistAbstractPainting().build<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a purpleMinimalistAbstractPainting preset when built for graphql`, () => {
    const purpleMinimalistAbstractPaintingPresetGraphql =
      purpleMinimalistAbstractPainting().buildGraphql<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPresetGraphql).toMatchInlineSnapshot(
      ``
    );
  });
});
