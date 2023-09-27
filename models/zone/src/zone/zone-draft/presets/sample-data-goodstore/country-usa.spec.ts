import type { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryUsa from './country-usa';

describe('with the preset `country usa`', () => {
  it('should return a zone with name `USA`', () => {
    const zone = countryUsa().build<TZoneDraft>();

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
    const zone = countryUsa().buildGraphql<TZoneDraftGraphql>();

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
});
