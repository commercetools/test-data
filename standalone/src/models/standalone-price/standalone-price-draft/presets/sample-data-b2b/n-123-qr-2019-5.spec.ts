import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20195 from './n-123-qr-2019-5';

describe(`with n123Qr20195 preset`, () => {
  it(`should return a n123Qr20195 preset`, () => {
    const n123Qr20195Preset = n123Qr20195().build<TStandalonePriceDraft>();
    expect(n123Qr20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-5",
        "sku": "n123-qr-2019",
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

  it(`should return a n123Qr20195 preset when built for graphql`, () => {
    const n123Qr20195PresetGraphql =
      n123Qr20195().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-5",
        "sku": "n123-qr-2019",
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
