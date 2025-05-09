import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20238 from './n-123-qr-2023-8';

describe(`with n123Qr20238 preset`, () => {
  it(`should return a n123Qr20238 preset`, () => {
    const n123Qr20238Preset = n123Qr20238().build<TStandalonePriceDraft>();
    expect(n123Qr20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-8",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20238 preset when built for graphql`, () => {
    const n123Qr20238PresetGraphql =
      n123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-8",
        "sku": "n123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
