import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20237 from './dd-234-wx-2023-7';

describe(`with dd234Wx20237 preset`, () => {
  it(`should return a dd234Wx20237 preset`, () => {
    const dd234Wx20237Preset = dd234Wx20237().build<TStandalonePriceDraft>();
    expect(dd234Wx20237Preset).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2023-7",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20237 preset when built for graphql`, () => {
    const dd234Wx20237PresetGraphql =
      dd234Wx20237().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2023-7",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
