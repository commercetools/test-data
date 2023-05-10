import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import australia from './australia';

describe('with australia preset', () => {
  it('should return a australia preset', () => {
    const australiaPreset = australia().build<TZoneRateDraft>();
    expect(australiaPreset.zone).toMatchInlineSnapshot(`
      {
        "key": "australia",
        "typeId": "zone",
      }
    `);
    expect(australiaPreset.shippingRates).toMatchInlineSnapshot(`
      [
        {
          "freeAbove": {
            "centAmount": 20000,
            "currencyCode": "AUD",
          },
          "price": {
            "centAmount": 2000,
            "currencyCode": "AUD",
          },
          "tiers": [],
        },
      ]
    `);
  });

  it('should return a australia preset when built for graphql', () => {
    const australiaPresetGraphql =
      australia().buildGraphql<TZoneRateDraftGraphql>();
    expect(australiaPresetGraphql.zone).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "australia",
        "typeId": "zone",
      }
    `);
    expect(australiaPresetGraphql.shippingRates).toMatchInlineSnapshot(`
      [
        {
          "__typename": "ShippingRateDraft",
          "freeAbove": {
            "__typename": "BaseMoneyInput",
            "centAmount": 20000,
            "currencyCode": "AUD",
          },
          "price": {
            "__typename": "BaseMoneyInput",
            "centAmount": 2000,
            "currencyCode": "AUD",
          },
          "tiers": [],
        },
      ]
    `);
  });
});
