import { TZoneDraft } from '../../../types';
import withCountryAustralia from './with-country-australia';

describe('with the preset `country australia`', () => {
  it('should return a zone with name `Australia`', () => {
    const zone = withCountryAustralia().build<TZoneDraft>();

    expect(zone).toEqual(
      expect.objectContaining({
        name: expect.stringContaining('Australia'),
        key: expect.stringContaining('australia'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'AU',
          }),
        ]),
      })
    );
  });
});
