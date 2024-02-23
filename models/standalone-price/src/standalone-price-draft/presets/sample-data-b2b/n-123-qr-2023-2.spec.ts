import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20232 from './n-123-qr-2023-2';

describe(`with n123Qr20232 preset`, () => {
  it(`should return a n123Qr20232 preset`, () => {
    const n123Qr20232Preset = n123Qr20232().build<TStandalonePriceDraft>();
    expect(n123Qr20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-2",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 968001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a n123Qr20232 preset when built for graphql`, () => {
    const n123Qr20232PresetGraphql =
      n123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-2",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 968001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
