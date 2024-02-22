import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20232 from './g-123-qr-2023-2';

describe(`with g123Qr20232 preset`, () => {
  it(`should return a g123Qr20232 preset`, () => {
    const g123Qr20232Preset = g123Qr20232().build<TStandalonePriceDraft>();
    expect(g123Qr20232Preset).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-2",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20232 preset when built for graphql`, () => {
    const g123Qr20232PresetGraphql =
      g123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-2",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
