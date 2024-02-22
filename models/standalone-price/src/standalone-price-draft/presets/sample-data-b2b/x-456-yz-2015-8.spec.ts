import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20158 from './x-456-yz-2015-8';

describe(`with x456Yz20158 preset`, () => {
  it(`should return a x456Yz20158 preset`, () => {
    const x456Yz20158Preset = x456Yz20158().build<TStandalonePriceDraft>();
    expect(x456Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-8",
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20158 preset when built for graphql`, () => {
    const x456Yz20158PresetGraphql =
      x456Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-8",
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
