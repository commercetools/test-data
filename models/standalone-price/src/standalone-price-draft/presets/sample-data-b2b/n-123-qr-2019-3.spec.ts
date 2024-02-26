import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20193 from './n-123-qr-2019-3';

describe(`with n123Qr20193 preset`, () => {
  it(`should return a n123Qr20193 preset`, () => {
    const n123Qr20193Preset = n123Qr20193().build<TStandalonePriceDraft>();
    expect(n123Qr20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-3",
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1144000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20193 preset when built for graphql`, () => {
    const n123Qr20193PresetGraphql =
      n123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-3",
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1144000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
