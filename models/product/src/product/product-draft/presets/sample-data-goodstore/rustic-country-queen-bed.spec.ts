import type { TProductDraft } from '../../../types';
import rusticCountryQueenBed from './rustic-country-queen-bed';
import productDraft from './rustic-country-queen-bed.spec.json';

describe(`with rusticCountryQueenBed preset`, () => {
  it(`should return a rusticCountryQueenBed preset`, () => {
    const rusticCountryQueenBedPreset =
      rusticCountryQueenBed().build<TProductDraft>();
    expect(rusticCountryQueenBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a rusticCountryQueenBed preset when built for graphql`, () => {
    const rusticCountryQueenBedPresetGraphql =
      rusticCountryQueenBed().buildGraphql<TProductDraft>();
    expect(rusticCountryQueenBedPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
