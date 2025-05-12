import type { TLocation } from '../../types';
import withCountryNoState from './with-country-no-state';

describe('Location with country code & no state', () => {
  it('should return a Location containing a country code & no state', () => {
    const countryNoState = withCountryNoState().build<TLocation>();

    expect(countryNoState).toEqual(
      expect.objectContaining({
        country: expect.any(String),
        state: null,
      })
    );
  });
});
