import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20236 from './g-123-qr-2023-6';

describe(`with g123Qr20236 preset`, () => {
  it(`should return a g123Qr20236 preset`, () => {
    const g123Qr20236Preset = g123Qr20236().build<TStandalonePriceDraft>();
    expect(g123Qr20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-6",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20236 preset when built for graphql`, () => {
    const g123Qr20236PresetGraphql =
      g123Qr20236().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-6",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
