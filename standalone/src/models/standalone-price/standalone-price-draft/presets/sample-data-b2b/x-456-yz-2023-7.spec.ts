import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20237 from './x-456-yz-2023-7';

describe(`with x456Yz20237 preset`, () => {
  it(`should return a x456Yz20237 preset`, () => {
    const x456Yz20237Preset = x456Yz20237().build<TStandalonePriceDraft>();
    expect(x456Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20237 preset when built for graphql`, () => {
    const x456Yz20237PresetGraphql =
      x456Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
