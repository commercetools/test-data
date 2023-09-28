import type { TProductDraft } from '../../../types';
import marquisTray from './marquis-tray';
import productDraft from './marquis-tray.spec.json';

describe(`with marquisTray preset`, () => {
  it(`should return a marquisTray preset`, () => {
    const marquisTrayPreset = marquisTray().build<TProductDraft>();
    expect(marquisTrayPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a marquisTray preset when built for graphql`, () => {
    const marquisTrayPresetGraphql =
      marquisTray().buildGraphql<TProductDraft>();
    expect(marquisTrayPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
