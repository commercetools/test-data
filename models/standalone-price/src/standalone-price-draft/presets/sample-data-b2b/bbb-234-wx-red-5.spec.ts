import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed5 from './bbb-234-wx-red-5';

describe(`with bbb234WxRed5 preset`, () => {
  it(`should return a bbb234WxRed5 preset`, () => {
    const bbb234WxRed5Preset = bbb234WxRed5().build<TStandalonePriceDraft>();
    expect(bbb234WxRed5Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-5",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed5 preset when built for graphql`, () => {
    const bbb234WxRed5PresetGraphql =
      bbb234WxRed5().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-5",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
