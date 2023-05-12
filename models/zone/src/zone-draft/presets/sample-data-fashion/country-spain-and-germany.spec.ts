import type { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countrySpainAndGermany from './country-spain-and-germany';

describe('with the preset `country spain and germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = countrySpainAndGermany().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "ES",
          },
          {
            "country": "DE",
          },
        ],
        "name": "Europe",
      }
    `);
  });

  it('should return a zone with name `Europe` when built for GraphQL', () => {
    const zoneGraphql =
      countrySpainAndGermany().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ZoneDraft",
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "ES",
          },
          {
            "country": "DE",
          },
        ],
        "name": "Europe",
      }
    `);
  });
});
