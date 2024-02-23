import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20155 from './n-123-qr-2015-5';

describe(`with n123Qr20155 preset`, () => {
  it(`should return a n123Qr20155 preset`, () => {
    const n123Qr20155Preset = n123Qr20155().build<TStandalonePriceDraft>();
    expect(n123Qr20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-5",
        "sku": "n123-qr-2015",
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

  it(`should return a n123Qr20155 preset when built for graphql`, () => {
    const n123Qr20155PresetGraphql =
      n123Qr20155().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-5",
        "sku": "n123-qr-2015",
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
