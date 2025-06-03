import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20153 from './n-123-qr-2015-3';

describe(`with n123Qr20153 preset`, () => {
  it(`should return a n123Qr20153 preset`, () => {
    const n123Qr20153Preset = n123Qr20153().build<TStandalonePriceDraft>();
    expect(n123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1056000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20153 preset when built for graphql`, () => {
    const n123Qr20153PresetGraphql =
      n123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1056000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
