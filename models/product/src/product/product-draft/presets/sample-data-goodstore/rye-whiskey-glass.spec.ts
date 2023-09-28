import type { TProductDraft } from '../../../types';
import ryeWhiskeyGlass from './rye-whiskey-glass';
import productDraft from './rye-whiskey-glass.spec.json';

describe(`with ryeWhiskeyGlass preset`, () => {
  it(`should return a ryeWhiskeyGlass preset`, () => {
    const ryeWhiskeyGlassPreset = ryeWhiskeyGlass().build<TProductDraft>();
    expect(ryeWhiskeyGlassPreset).toMatchObject(productDraft.rest);
  });
});
