import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20233 from './g-123-qr-2023-3';

describe(`with g123Qr20233 preset`, () => {
  it(`should return a g123Qr20233 preset`, () => {
    const g123Qr20233Preset = g123Qr20233().build<TStandalonePriceDraft>();
    expect(g123Qr20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-3",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20233 preset when built for graphql`, () => {
    const g123Qr20233PresetGraphql =
      g123Qr20233().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-3",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
