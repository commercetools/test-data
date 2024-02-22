import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20157 from './u-123-qr-2015-7';

describe(`with u123Qr20157 preset`, () => {
  it(`should return a u123Qr20157 preset`, () => {
    const u123Qr20157Preset = u123Qr20157().build<TStandalonePriceDraft>();
    expect(u123Qr20157Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-7",
        "sku": "u123-qr-2015",
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

  it(`should return a u123Qr20157 preset when built for graphql`, () => {
    const u123Qr20157PresetGraphql =
      u123Qr20157().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20157PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-7",
        "sku": "u123-qr-2015",
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
