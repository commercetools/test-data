import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20152 from './u-123-qr-2015-2';

describe(`with u123Qr20152 preset`, () => {
  it(`should return a u123Qr20152 preset`, () => {
    const u123Qr20152Preset = u123Qr20152().build<TStandalonePriceDraft>();
    expect(u123Qr20152Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-2",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1782000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a u123Qr20152 preset when built for graphql`, () => {
    const u123Qr20152PresetGraphql =
      u123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-2",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1782000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
