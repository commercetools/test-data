import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20237 from './aa-123-qr-2023-7';

describe(`with aa123Qr20237 preset`, () => {
  it(`should return a aa123Qr20237 preset`, () => {
    const aa123Qr20237Preset = aa123Qr20237().build<TStandalonePriceDraft>();
    expect(aa123Qr20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-7",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20237 preset when built for graphql`, () => {
    const aa123Qr20237PresetGraphql =
      aa123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-7",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
