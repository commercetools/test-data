import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20156 from './u-123-qr-2015-6';

describe(`with u123Qr20156 preset`, () => {
  it(`should return a u123Qr20156 preset`, () => {
    const u123Qr20156Preset = u123Qr20156().build<TStandalonePriceDraft>();
    expect(u123Qr20156Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-6",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a u123Qr20156 preset when built for graphql`, () => {
    const u123Qr20156PresetGraphql =
      u123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20156PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2015-6",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
