import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20237 from './g-123-qr-2023-7';

describe(`with g123Qr20237 preset`, () => {
  it(`should return a g123Qr20237 preset`, () => {
    const g123Qr20237Preset = g123Qr20237().build<TStandalonePriceDraft>();
    expect(g123Qr20237Preset).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-7",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20237 preset when built for graphql`, () => {
    const g123Qr20237PresetGraphql =
      g123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "g123-qr-2023-7",
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
