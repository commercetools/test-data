import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20236 from './n-123-qr-2023-6';

describe(`with n123Qr20236 preset`, () => {
  it(`should return a n123Qr20236 preset`, () => {
    const n123Qr20236Preset = n123Qr20236().build<TStandalonePriceDraft>();
    expect(n123Qr20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 640000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a n123Qr20236 preset when built for graphql`, () => {
    const n123Qr20236PresetGraphql =
      n123Qr20236().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 640000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
