import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20237 from './n-123-qr-2023-7';

describe(`with n123Qr20237 preset`, () => {
  it(`should return a n123Qr20237 preset`, () => {
    const n123Qr20237Preset = n123Qr20237().build<TStandalonePriceDraft>();
    expect(n123Qr20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
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

  it(`should return a n123Qr20237 preset when built for graphql`, () => {
    const n123Qr20237PresetGraphql =
      n123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2023",
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
