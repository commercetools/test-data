import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryGermanyAndUk from './country-germany-and-uk';

describe('with the preset `country germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = countryGermanyAndUk().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "GB",
          },
        ],
        "name": "Europe",
      }
    `);
  });

  it('should return a zone with name `Europe` when built for GraphQL', () => {
    const zoneGraphql = countryGermanyAndUk().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "GB",
          },
        ],
        "name": "Europe",
      }
    `);
  });
});
