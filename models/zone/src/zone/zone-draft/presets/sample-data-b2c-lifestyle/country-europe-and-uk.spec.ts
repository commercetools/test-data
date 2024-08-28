import type { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import europeAndUk from './country-europe-and-uk';

describe('with the preset `country germany`', () => {
  it('should return a zone with name `Europe`', () => {
    const zone = europeAndUk().build<TZoneDraft>();

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
        "name": "EU and UK",
      }
    `);
  });

  it('should return a zone with name `Europe` when built for GraphQL', () => {
    const zoneGraphql = europeAndUk().buildGraphql<TZoneDraftGraphql>();

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
        "name": "EU and UK",
      }
    `);
  });
});
