import type { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countrySpainAndGermany from './country-spain-and-germany';

describe('with the preset `country spain and germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = countrySpainAndGermany().build<TZoneDraft>();

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

  it('should return a zone with name `Europe` when built for GraphQL', () => {
    const zoneGraphql =
      countrySpainAndGermany().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toEqual(
      expect.objectContaining({
        __typename: expect.stringContaining('ZoneDraft'),
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
