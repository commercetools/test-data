import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20155 from './pp-234-wx-2015-5';

describe(`with pp234Wx20155 preset`, () => {
  it(`should return a pp234Wx20155 preset`, () => {
    const pp234Wx20155Preset = pp234Wx20155().build<TStandalonePriceDraft>();
    expect(pp234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-5",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20155 preset when built for graphql`, () => {
    const pp234Wx20155PresetGraphql =
      pp234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-5",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
