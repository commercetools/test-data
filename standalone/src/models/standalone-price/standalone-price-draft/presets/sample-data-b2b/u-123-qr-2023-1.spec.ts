import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20231 from './u-123-qr-2023-1';

describe(`with u123Qr20231 preset`, () => {
  it(`should return a u123Qr20231 preset`, () => {
    const u123Qr20231Preset = u123Qr20231().build<TStandalonePriceDraft>();
    expect(u123Qr20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-1",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a u123Qr20231 preset when built for graphql`, () => {
    const u123Qr20231PresetGraphql =
      u123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2023-1",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
