import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed4 from './bbb-234-wx-red-4';

describe(`with bbb234WxRed4 preset`, () => {
  it(`should return a bbb234WxRed4 preset`, () => {
    const bbb234WxRed4Preset = bbb234WxRed4().build<TStandalonePriceDraft>();
    expect(bbb234WxRed4Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-4",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed4 preset when built for graphql`, () => {
    const bbb234WxRed4PresetGraphql =
      bbb234WxRed4().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-4",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
