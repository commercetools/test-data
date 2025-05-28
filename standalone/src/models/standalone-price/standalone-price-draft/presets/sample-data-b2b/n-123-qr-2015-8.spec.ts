import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20158 from './n-123-qr-2015-8';

describe(`with n123Qr20158 preset`, () => {
  it(`should return a n123Qr20158 preset`, () => {
    const n123Qr20158Preset = n123Qr20158().build<TStandalonePriceDraft>();
    expect(n123Qr20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-8",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
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

  it(`should return a n123Qr20158 preset when built for graphql`, () => {
    const n123Qr20158PresetGraphql =
      n123Qr20158().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-8",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
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
