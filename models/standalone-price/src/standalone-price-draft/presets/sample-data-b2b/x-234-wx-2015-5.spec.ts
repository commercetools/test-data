import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20155 from './x-234-wx-2015-5';

describe(`with x234Wx20155 preset`, () => {
  it(`should return a x234Wx20155 preset`, () => {
    const x234Wx20155Preset = x234Wx20155().build<TStandalonePriceDraft>();
    expect(x234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-5",
        "sku": "x234-wx-2015",
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

  it(`should return a x234Wx20155 preset when built for graphql`, () => {
    const x234Wx20155PresetGraphql =
      x234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-5",
        "sku": "x234-wx-2015",
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
