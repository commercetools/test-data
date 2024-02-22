import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20198 from './x-456-yz-2019-8';

describe(`with x456Yz20198 preset`, () => {
  it(`should return a x456Yz20198 preset`, () => {
    const x456Yz20198Preset = x456Yz20198().build<TStandalonePriceDraft>();
    expect(x456Yz20198Preset).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-8",
        "sku": "x456-yz-2019",
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

  it(`should return a x456Yz20198 preset when built for graphql`, () => {
    const x456Yz20198PresetGraphql =
      x456Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20198PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-8",
        "sku": "x456-yz-2019",
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
