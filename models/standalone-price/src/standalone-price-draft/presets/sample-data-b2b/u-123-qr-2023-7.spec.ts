import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20237 from './u-123-qr-2023-7';

describe(`with u123Qr20237 preset`, () => {
  it(`should return a u123Qr20237 preset`, () => {
    const u123Qr20237Preset = u123Qr20237().build<TStandalonePriceDraft>();
    expect(u123Qr20237Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2023-7",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a u123Qr20237 preset when built for graphql`, () => {
    const u123Qr20237PresetGraphql =
      u123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2023-7",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
