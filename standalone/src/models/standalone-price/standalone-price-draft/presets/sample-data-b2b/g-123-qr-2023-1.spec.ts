import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20231 from './g-123-qr-2023-1';

describe(`with g123Qr20231 preset`, () => {
  it(`should return a g123Qr20231 preset`, () => {
    const g123Qr20231Preset = g123Qr20231().build<TStandalonePriceDraft>();
    expect(g123Qr20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-1",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a g123Qr20231 preset when built for graphql`, () => {
    const g123Qr20231PresetGraphql =
      g123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-1",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
