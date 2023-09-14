import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryGermany from './country-germany';

describe('with the preset `country germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = countryGermany().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
        ],
        "name": "Europe",
        "rates": undefined,
      }
    `);
  });

  it('should return a zone with name `Europe` when built for GraphQL', () => {
    const zoneGraphql = countryGermany().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
        ],
        "name": "Europe",
        "rates": undefined,
      }
    `);
  });
});
