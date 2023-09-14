import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryGreatBritain from './country-greatbritain';

describe('with the preset `country great britain`', () => {
  it('should return a zone with name `United Kingdom`', () => {
    const zone = countryGreatBritain().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "greatbritain",
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
    const zoneGraphql = countryGreatBritain().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "greatbritain",
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