import type { TLocation } from '../../types';
import withCountryUsNoState from './with-country-us-no-state';

describe('Location with country code of `US` & no state', () => {
  it('should return a Location containing a `US` country code & no state', () => {
    const countryUsNoState = withCountryUsNoState().build<TLocation>();

    expect(countryUsNoState).toEqual(
      expect.objectContaining({
        country: 'US',
        state: null,
      })
    );
  });
});
