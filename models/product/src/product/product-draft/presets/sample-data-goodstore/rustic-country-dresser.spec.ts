import type { TProductDraft } from '../../../types';
import rusticCountryDresser from './rustic-country-dresser';
import productDraft from './rustic-country-dresser.spec.json';

describe(`with rusticCountryDresser preset`, () => {
  it(`should return a rusticCountryDresser preset`, () => {
    const rusticCountryDresserPreset =
      rusticCountryDresser().build<TProductDraft>();
    expect(rusticCountryDresserPreset).toMatchObject(productDraft.rest);
  });
});
