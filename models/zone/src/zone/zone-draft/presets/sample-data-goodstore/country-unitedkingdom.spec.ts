import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryUnitedKingdom from './country-unitedkingdom';

describe('with the preset `country united kingdom`', () => {
  it('should return a zone with name `United Kingdom`', () => {
    const zone = countryUnitedKingdom().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "unitedkingdom",
        "locations": [
          {
            "country": "GB",
          },
        ],
        "name": "United Kingdom",
      }
    `);
  });

  it('should return a zone with name `United Kingdom` when built for GraphQL', () => {
    const zoneGraphql = 
      countryUnitedKingdom().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "unitedkingdom",
        "locations": [
          {
            "country": "GB",
          },
        ],
        "name": "United Kingdom",
      }
    `);
  });
});
