import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import expressUsa from './express-us';

describe('with express us preset', () => {
  it(`should return an express preset`, () => {
    const expressPreset = expressUsa().build<TZoneRateDraft>();
    expect(expressPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "usa",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return an express preset when built for Graphql`, () => {
    const expressPresetGraphql =
      expressUsa().buildGraphql<TZoneRateDraftGraphql>();
    expect(expressPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "usa",
          "typeId": "zone",
        },
      }
    `);
  });
});
