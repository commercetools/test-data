import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20154 from './n-123-qr-2015-4';

describe(`with n123Qr20154 preset`, () => {
  it(`should return a n123Qr20154 preset`, () => {
    const n123Qr20154Preset = n123Qr20154().build<TStandalonePriceDraft>();
    expect(n123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-4",
        "sku": "n123-qr-2015",
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

  it(`should return a n123Qr20154 preset when built for graphql`, () => {
    const n123Qr20154PresetGraphql =
      n123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-4",
        "sku": "n123-qr-2015",
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
