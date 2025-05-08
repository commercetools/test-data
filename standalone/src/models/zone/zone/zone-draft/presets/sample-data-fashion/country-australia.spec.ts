import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryAustralia from './country-australia';

describe('with the preset `country australia`', () => {
  it('should return a zone with name `Australia`', () => {
    const zone = countryAustralia().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "australia",
        "locations": [
          {
            "country": "AU",
          },
        ],
        "name": "Australia",
      }
    `);
  });

  it('should return a zone with name `Australia` when built for GraphQL', () => {
    const zoneGraphql = countryAustralia().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "australia",
        "locations": [
          {
            "country": "AU",
          },
        ],
        "name": "Australia",
      }
    `);
  });
});
