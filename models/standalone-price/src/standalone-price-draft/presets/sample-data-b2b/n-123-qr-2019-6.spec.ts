import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20196 from './n-123-qr-2019-6';

describe(`with n123Qr20196 preset`, () => {
  it(`should return a n123Qr20196 preset`, () => {
    const n123Qr20196Preset = n123Qr20196().build<TStandalonePriceDraft>();
    expect(n123Qr20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-6",
        "sku": "n123-qr-2019",
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

  it(`should return a n123Qr20196 preset when built for graphql`, () => {
    const n123Qr20196PresetGraphql =
      n123Qr20196().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-6",
        "sku": "n123-qr-2019",
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
