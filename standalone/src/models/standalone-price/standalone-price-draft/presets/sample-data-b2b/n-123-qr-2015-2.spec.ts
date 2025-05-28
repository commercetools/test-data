import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20152 from './n-123-qr-2015-2';

describe(`with n123Qr20152 preset`, () => {
  it(`should return a n123Qr20152 preset`, () => {
    const n123Qr20152Preset = n123Qr20152().build<TStandalonePriceDraft>();
    expect(n123Qr20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-2",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 792000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a n123Qr20152 preset when built for graphql`, () => {
    const n123Qr20152PresetGraphql =
      n123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-2",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 792000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
