import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryUS from './country-us';

describe('with the preset `country USA`', () => {
  it('should return a zone with name `USA`', () => {
    const zone = countryUS().build<TZoneDraft>();

    expect(zone).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "usa",
        "locations": [
          {
            "country": "US",
          },
        ],
        "name": "USA",
      }
    `);
  });

  it('should return a zone with name `USA` when built for GraphQL', () => {
    const zoneGraphql = countryUS().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "usa",
        "locations": [
          {
            "country": "US",
          },
        ],
        "name": "USA",
      }
    `);
  });
});
