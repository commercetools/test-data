import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20234 from './u-123-qr-2023-4';

describe(`with u123Qr20234 preset`, () => {
  it(`should return a u123Qr20234 preset`, () => {
    const u123Qr20234Preset = u123Qr20234().build<TStandalonePriceDraft>();
    expect(u123Qr20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-4",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a u123Qr20234 preset when built for graphql`, () => {
    const u123Qr20234PresetGraphql =
      u123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-4",
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
