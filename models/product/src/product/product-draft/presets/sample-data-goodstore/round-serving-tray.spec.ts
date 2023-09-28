import type { TProductDraft } from '../../../types';
import roundServingTray from './round-serving-tray';
import productDraft from './round-serving-tray.spec.json';

describe(`with roundServingTray preset`, () => {
  it(`should return a roundServingTray preset`, () => {
    const roundServingTrayPreset = roundServingTray().build<TProductDraft>();
    expect(roundServingTrayPreset).toMatchObject(productDraft.rest);
  });
});
