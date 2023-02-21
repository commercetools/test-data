import { TZoneDraft } from '../../../types';
import withCountryUsa from './with-country-usa';

describe('with the preset `country usa`', () => {
  it('should return a zone with name `USA`', () => {
    const zone = withCountryUsa().build<TZoneDraft>();

    expect(zone).toEqual(
      expect.objectContaining({
        name: expect.stringContaining('USA'),
        key: expect.stringContaining('usa'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'US',
          }),
        ]),
      })
    );
  });
});
