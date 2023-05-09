import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import usa from './usa';

describe('with usa preset', () => {
  it('should return a usa preset', () => {
    const usaPreset = usa().build<TZoneRateDraft>();
    expect(usaPreset.zone).toMatchInlineSnapshot(`
            {
              "key": "usa",
              "typeId": "zone",
            }
        `);
    expect(usaPreset.shippingRates).toMatchInlineSnapshot(`
      [
        {
          "freeAbove": {
            "centAmount": 10000,
            "currencyCode": "USD",
          },
          "price": {
            "centAmount": 1299,
            "currencyCode": "USD",
          },
          "tiers": [],
        },
      ]
    `);
  });

  it('should return a usa preset when built for graphql', () => {
    const usaPresetGraphql = usa().buildGraphql<TZoneRateDraftGraphql>();
    expect(usaPresetGraphql.zone).toMatchInlineSnapshot(`
            {
              "__typename": "Reference",
              "key": "usa",
              "typeId": "zone",
            }
        `);
    expect(usaPresetGraphql.shippingRates).toMatchInlineSnapshot(`
      [
        {
          "__typename": "ShippingRateDraft",
          "freeAbove": {
            "__typename": "BaseMoneyInput",
            "centAmount": 10000,
            "currencyCode": "USD",
          },
          "price": {
            "__typename": "BaseMoneyInput",
            "centAmount": 1299,
            "currencyCode": "USD",
          },
          "tiers": [],
        },
      ]
    `);
  });
});
