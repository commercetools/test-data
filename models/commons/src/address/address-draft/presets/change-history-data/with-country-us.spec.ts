import type { TAddressDraft } from '../../../types';
import withCountryUs from './with-country-us';

describe('with country code usa', () => {
  it('should return a country code set to `usa`', () => {
    const countryUs = withCountryUs().build<TAddressDraft>();

    expect(countryUs).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
      })
    );
  });
});
