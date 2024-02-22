import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20157 from './x-456-yz-2015-7';

describe(`with x456Yz20157 preset`, () => {
  it(`should return a x456Yz20157 preset`, () => {
    const x456Yz20157Preset = x456Yz20157().build<TStandalonePriceDraft>();
    expect(x456Yz20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-7",
        "sku": "x456-yz-2015",
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

  it(`should return a x456Yz20157 preset when built for graphql`, () => {
    const x456Yz20157PresetGraphql =
      x456Yz20157().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-7",
        "sku": "x456-yz-2015",
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
