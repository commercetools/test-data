import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20197 from './x-456-yz-2019-7';

describe(`with x456Yz20197 preset`, () => {
  it(`should return a x456Yz20197 preset`, () => {
    const x456Yz20197Preset = x456Yz20197().build<TStandalonePriceDraft>();
    expect(x456Yz20197Preset).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-7",
        "sku": "x456-yz-2019",
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

  it(`should return a x456Yz20197 preset when built for graphql`, () => {
    const x456Yz20197PresetGraphql =
      x456Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-7",
        "sku": "x456-yz-2019",
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
