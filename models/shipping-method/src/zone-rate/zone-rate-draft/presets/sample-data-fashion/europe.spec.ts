import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import europe from './europe';

describe('with europe preset', () => {
  it('should return a europe preset', () => {
    const europePreset = europe().build<TZoneRateDraft>();
    expect(europePreset.zone).toMatchInlineSnapshot(`
            {
              "key": "europe",
              "typeId": "zone",
            }
        `);
    expect(europePreset.shippingRates).toMatchInlineSnapshot(`
      [
        {
          "freeAbove": {
            "centAmount": 15000,
            "currencyCode": "EUR",
          },
          "price": {
            "centAmount": 1299,
            "currencyCode": "EUR",
          },
          "tiers": [],
        },
      ]
    `);
  });

  it('should return a europe preset when built for graphql', () => {
    const europePresetGraphql = europe().buildGraphql<TZoneRateDraftGraphql>();
    expect(europePresetGraphql.zone).toMatchInlineSnapshot(`
            {
              "__typename": "Reference",
              "key": "europe",
              "typeId": "zone",
            }
        `);
    expect(europePresetGraphql.shippingRates).toMatchInlineSnapshot(`
      [
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
          "tiers": [],
        },
      ]
    `);
  });
});
