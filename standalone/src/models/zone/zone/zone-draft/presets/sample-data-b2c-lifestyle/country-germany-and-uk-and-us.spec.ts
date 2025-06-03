import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryGermanyAndUkAndUs from './country-germany-and-uk-and-us';

describe('with the preset `countryGermanyAndUkAndUs`', () => {
  it('should return a zone with name `Germany, UK and US`', () => {
    const zone = countryGermanyAndUkAndUs().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "germany-uk-us",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "GB",
          },
          {
            "country": "US",
          },
        ],
        "name": "Germany, UK and US",
      }
    `);
  });

  it('should return a zone with name `Germany, UK and US` when built for GraphQL', () => {
    const zoneGraphql =
      countryGermanyAndUkAndUs().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "germany-uk-us",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "GB",
          },
          {
            "country": "US",
          },
        ],
        "name": "Germany, UK and US",
      }
    `);
  });
});
