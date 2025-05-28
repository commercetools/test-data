import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20151 from './n-123-qr-2015-1';

describe(`with n123Qr20151 preset`, () => {
  it(`should return a n123Qr20151 preset`, () => {
    const n123Qr20151Preset = n123Qr20151().build<TStandalonePriceDraft>();
    expect(n123Qr20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a n123Qr20151 preset when built for graphql`, () => {
    const n123Qr20151PresetGraphql =
      n123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
