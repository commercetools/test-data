import type { TProductDraft } from '../../../types';
import cottonSilkBedsheet from './cotton-silk-bedsheet';
import productDraft from './cotton-silk-bedsheet.spec.json';

describe(`with cottonSilkBedsheet preset`, () => {
  it(`should return a cottonSilkBedsheet preset`, () => {
    const cottonSilkBedsheetPreset =
      cottonSilkBedsheet().build<TProductDraft>();
    expect(cottonSilkBedsheetPreset).toMatchObject(productDraft);
  });
});
