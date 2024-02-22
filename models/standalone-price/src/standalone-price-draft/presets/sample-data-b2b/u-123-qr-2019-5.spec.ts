import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20195 from './u-123-qr-2019-5';

describe(`with u123Qr20195 preset`, () => {
  it(`should return a u123Qr20195 preset`, () => {
    const u123Qr20195Preset = u123Qr20195().build<TStandalonePriceDraft>();
    expect(u123Qr20195Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2019-5",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1620000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a u123Qr20195 preset when built for graphql`, () => {
    const u123Qr20195PresetGraphql =
      u123Qr20195().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2019-5",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1620000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
