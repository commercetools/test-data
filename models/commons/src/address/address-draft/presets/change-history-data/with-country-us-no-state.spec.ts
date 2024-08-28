import type { TAddressDraft } from '../../../types';
import withCountryUsNoState from './with-country-us-no-state';

describe('with country code usa and no state', () => {
  it('should return a country code set to `usa` with no state', () => {
    const countryUsNoState = withCountryUsNoState().build<TAddressDraft>();

    expect(countryUsNoState).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
        state: null,
      })
    );
  });
});
