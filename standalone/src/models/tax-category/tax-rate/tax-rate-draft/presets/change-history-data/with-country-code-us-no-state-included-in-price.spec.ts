import type { TTaxRateDraft } from '../../../types';
import withCountryCodeUsNoStateIncludedInPrice from './with-country-code-us-no-state-included-in-price';

describe('Tax rate with country code US, no state & included in price', () => {
  it('should return a tax rate containing the country code of US, no state & included in price set to true', () => {
    const countryUsNoStateIncluded =
      withCountryCodeUsNoStateIncludedInPrice().build<TTaxRateDraft>();

    expect(countryUsNoStateIncluded).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
        state: null,
        includedInPrice: true,
      })
    );
  });
});
