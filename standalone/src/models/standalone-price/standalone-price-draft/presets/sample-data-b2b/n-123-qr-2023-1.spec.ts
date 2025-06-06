import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20231 from './n-123-qr-2023-1';

describe(`with n123Qr20231 preset`, () => {
  it(`should return a n123Qr20231 preset`, () => {
    const n123Qr20231Preset = n123Qr20231().build<TStandalonePriceDraft>();
    expect(n123Qr20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1056000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a n123Qr20231 preset when built for graphql`, () => {
    const n123Qr20231PresetGraphql =
      n123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1056000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
