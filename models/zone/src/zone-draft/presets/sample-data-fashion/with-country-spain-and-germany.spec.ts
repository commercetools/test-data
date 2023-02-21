import { TZoneDraft } from '../../../types';
import withCountrySpainAndGermany from './with-country-spain-and-germany';

describe('with the preset `country spain and germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = withCountrySpainAndGermany().build<TZoneDraft>();

    expect(zone).toEqual(
      expect.objectContaining({
        name: expect.stringContaining('Europe'),
        key: expect.stringContaining('europe'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'ES',
          }),
          expect.objectContaining({
            country: 'DE',
          }),
        ]),
      })
    );
  });
});
