import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20233 from './x-456-yz-2023-3';

describe(`with x456Yz20233 preset`, () => {
  it(`should return a x456Yz20233 preset`, () => {
    const x456Yz20233Preset = x456Yz20233().build<TStandalonePriceDraft>();
    expect(x456Yz20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-3",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20233 preset when built for graphql`, () => {
    const x456Yz20233PresetGraphql =
      x456Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-3",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
