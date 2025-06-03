import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20234 from './n-123-qr-2023-4';

describe(`with n123Qr20234 preset`, () => {
  it(`should return a n123Qr20234 preset`, () => {
    const n123Qr20234Preset = n123Qr20234().build<TStandalonePriceDraft>();
    expect(n123Qr20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a n123Qr20234 preset when built for graphql`, () => {
    const n123Qr20234PresetGraphql =
      n123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
