import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20238 from './g-123-qr-2023-8';

describe(`with g123Qr20238 preset`, () => {
  it(`should return a g123Qr20238 preset`, () => {
    const g123Qr20238Preset = g123Qr20238().build<TStandalonePriceDraft>();
    expect(g123Qr20238Preset).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-8",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20238 preset when built for graphql`, () => {
    const g123Qr20238PresetGraphql =
      g123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20238PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-8",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
