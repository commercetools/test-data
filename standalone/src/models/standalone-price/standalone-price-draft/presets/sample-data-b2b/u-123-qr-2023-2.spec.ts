import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20232 from './u-123-qr-2023-2';

describe(`with u123Qr20232 preset`, () => {
  it(`should return a u123Qr20232 preset`, () => {
    const u123Qr20232Preset = u123Qr20232().build<TStandalonePriceDraft>();
    expect(u123Qr20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a u123Qr20232 preset when built for graphql`, () => {
    const u123Qr20232PresetGraphql =
      u123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
