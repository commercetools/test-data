import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20232 from './x-456-yz-2023-2';

describe(`with x456Yz20232 preset`, () => {
  it(`should return a x456Yz20232 preset`, () => {
    const x456Yz20232Preset = x456Yz20232().build<TStandalonePriceDraft>();
    expect(x456Yz20232Preset).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2023-2",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x456Yz20232 preset when built for graphql`, () => {
    const x456Yz20232PresetGraphql =
      x456Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2023-2",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
