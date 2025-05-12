import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20238 from './u-123-qr-2023-8';

describe(`with u123Qr20238 preset`, () => {
  it(`should return a u123Qr20238 preset`, () => {
    const u123Qr20238Preset = u123Qr20238().build<TStandalonePriceDraft>();
    expect(u123Qr20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-8",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a u123Qr20238 preset when built for graphql`, () => {
    const u123Qr20238PresetGraphql =
      u123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-8",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
