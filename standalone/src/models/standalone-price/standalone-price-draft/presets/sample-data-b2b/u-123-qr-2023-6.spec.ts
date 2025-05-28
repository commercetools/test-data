import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20236 from './u-123-qr-2023-6';

describe(`with u123Qr20236 preset`, () => {
  it(`should return a u123Qr20236 preset`, () => {
    const u123Qr20236Preset = u123Qr20236().build<TStandalonePriceDraft>();
    expect(u123Qr20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
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

  it(`should return a u123Qr20236 preset when built for graphql`, () => {
    const u123Qr20236PresetGraphql =
      u123Qr20236().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
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
