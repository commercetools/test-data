import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20235 from './g-123-qr-2023-5';

describe(`with g123Qr20235 preset`, () => {
  it(`should return a g123Qr20235 preset`, () => {
    const g123Qr20235Preset = g123Qr20235().build<TStandalonePriceDraft>();
    expect(g123Qr20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-5",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20235 preset when built for graphql`, () => {
    const g123Qr20235PresetGraphql =
      g123Qr20235().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-5",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
