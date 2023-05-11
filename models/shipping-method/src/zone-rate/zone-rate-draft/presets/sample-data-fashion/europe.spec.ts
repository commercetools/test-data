import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import europe from './europe';

describe('with europe preset', () => {
  it('should return a europe preset', () => {
    const europePreset = europe().build<TZoneRateDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 15000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 1299,
              "currencyCode": "EUR",
            },
            "tiers": undefined,
          },
        ],
        "zone": {
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });

  it('should return a europe preset when built for graphql', () => {
    const europePresetGraphql = europe().buildGraphql<TZoneRateDraftGraphql>();
    expect(europePresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ZoneRateDraft",
        "shippingRates": [
          {
            "__typename": "ShippingRateDraft",
            "freeAbove": {
              "__typename": "BaseMoneyInput",
              "centAmount": 15000,
              "currencyCode": "EUR",
            },
            "price": {
              "__typename": "BaseMoneyInput",
              "centAmount": 1299,
              "currencyCode": "EUR",
            },
            "tiers": undefined,
          },
        ],
        "zone": {
          "__typename": "Reference",
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });
});
