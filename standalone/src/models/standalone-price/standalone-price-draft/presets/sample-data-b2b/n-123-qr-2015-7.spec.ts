import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20157 from './n-123-qr-2015-7';

describe(`with n123Qr20157 preset`, () => {
  it(`should return a n123Qr20157 preset`, () => {
    const n123Qr20157Preset = n123Qr20157().build<TStandalonePriceDraft>();
    expect(n123Qr20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-7",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20157 preset when built for graphql`, () => {
    const n123Qr20157PresetGraphql =
      n123Qr20157().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2015-7",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
