import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20235 from './n-123-qr-2023-5';

describe(`with n123Qr20235 preset`, () => {
  it(`should return a n123Qr20235 preset`, () => {
    const n123Qr20235Preset = n123Qr20235().build<TStandalonePriceDraft>();
    expect(n123Qr20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-5",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 720000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a n123Qr20235 preset when built for graphql`, () => {
    const n123Qr20235PresetGraphql =
      n123Qr20235().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-5",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 720000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
