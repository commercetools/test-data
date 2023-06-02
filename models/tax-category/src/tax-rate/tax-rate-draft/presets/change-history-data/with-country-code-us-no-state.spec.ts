import type { TTaxRateDraft } from '../../../types';
import withCountryCodeUsNoState from './with-country-code-us-no-state';

describe('Tax rate with country code US and no state', () => {
  it('should return a tax rate containing the country code of US and no state', () => {
    const countryUsNoState = withCountryCodeUsNoState().build<TTaxRateDraft>();

    expect(countryUsNoState).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
        state: null,
      })
    );
  });
});
