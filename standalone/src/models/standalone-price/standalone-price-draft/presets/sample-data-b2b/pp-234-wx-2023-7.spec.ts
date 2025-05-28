import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20237 from './pp-234-wx-2023-7';

describe(`with pp234Wx20237 preset`, () => {
  it(`should return a pp234Wx20237 preset`, () => {
    const pp234Wx20237Preset = pp234Wx20237().build<TStandalonePriceDraft>();
    expect(pp234Wx20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-7",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20237 preset when built for graphql`, () => {
    const pp234Wx20237PresetGraphql =
      pp234Wx20237().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-7",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
