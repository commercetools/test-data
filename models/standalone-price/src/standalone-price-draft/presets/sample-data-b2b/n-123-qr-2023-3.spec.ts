import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20233 from './n-123-qr-2023-3';

describe(`with n123Qr20233 preset`, () => {
  it(`should return a n123Qr20233 preset`, () => {
    const n123Qr20233Preset = n123Qr20233().build<TStandalonePriceDraft>();
    expect(n123Qr20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-3",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1232000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20233 preset when built for graphql`, () => {
    const n123Qr20233PresetGraphql =
      n123Qr20233().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-3",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1232000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
