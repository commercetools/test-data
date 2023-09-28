import type { TProductDraft } from '../../../types';
import marquisTray from './marquis-tray';
import productDraft from './marquis-tray.spec.json';

describe(`with marquisTray preset`, () => {
  it(`should return a marquisTray preset`, () => {
    const marquisTrayPreset = marquisTray().build<TProductDraft>();
    expect(marquisTrayPreset).toMatchObject(productDraft.rest);
  });
});
