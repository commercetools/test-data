import type { TProductDraft } from '../../../types';
import rusticCountryQueenBed from './rustic-country-queen-bed';
import productDraft from './rustic-country-queen-bed.spec.json';

describe(`with rusticCountryQueenBed preset`, () => {
  it(`should return a rusticCountryQueenBed preset`, () => {
    const rusticCountryQueenBedPreset =
      rusticCountryQueenBed().build<TProductDraft>();
    expect(rusticCountryQueenBedPreset).toMatchObject(productDraft.rest);
  });
});
