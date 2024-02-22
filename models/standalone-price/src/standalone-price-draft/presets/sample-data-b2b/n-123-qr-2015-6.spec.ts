import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20156 from './n-123-qr-2015-6';

describe(`with n123Qr20156 preset`, () => {
  it(`should return a n123Qr20156 preset`, () => {
    const n123Qr20156Preset = n123Qr20156().build<TStandalonePriceDraft>();
    expect(n123Qr20156Preset).toMatchInlineSnapshot(`
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
        "key": "n123-qr-2015-6",
        "sku": "n123-qr-2015",
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

  it(`should return a n123Qr20156 preset when built for graphql`, () => {
    const n123Qr20156PresetGraphql =
      n123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20156PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "n123-qr-2015-6",
        "sku": "n123-qr-2015",
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
