import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20198 from './n-123-qr-2019-8';

describe(`with n123Qr20198 preset`, () => {
  it(`should return a n123Qr20198 preset`, () => {
    const n123Qr20198Preset = n123Qr20198().build<TStandalonePriceDraft>();
    expect(n123Qr20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-8",
        "sku": "n123-qr-2019",
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

  it(`should return a n123Qr20198 preset when built for graphql`, () => {
    const n123Qr20198PresetGraphql =
      n123Qr20198().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-8",
        "sku": "n123-qr-2019",
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
