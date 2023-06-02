import type { TTaxCategoryDraft } from '../../../types';
import withCountryUsaIncludedInPrice from './with-tax-rate-country-us-no-state-included-in-price';

describe('Tax category with a tax rate with country code US & no state', () => {
  it('should return a tax category containing a tax rate with country US & no state', () => {
    const taxCategory =
      withCountryUsaIncludedInPrice().build<TTaxCategoryDraft>();

    expect(taxCategory).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.arrayContaining([
          expect.objectContaining({
            country: 'US',
            state: null,
          }),
        ]),
      })
    );
  });
});
