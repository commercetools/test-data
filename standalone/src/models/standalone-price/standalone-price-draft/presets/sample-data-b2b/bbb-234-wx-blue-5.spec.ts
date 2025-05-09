import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue5 from './bbb-234-wx-blue-5';

describe(`with bbb234WxBlue5 preset`, () => {
  it(`should return a bbb234WxBlue5 preset`, () => {
    const bbb234WxBlue5Preset = bbb234WxBlue5().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-5",
        "sku": "bbb234-wx-blue",
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

  it(`should return a bbb234WxBlue5 preset when built for graphql`, () => {
    const bbb234WxBlue5PresetGraphql =
      bbb234WxBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-5",
        "sku": "bbb234-wx-blue",
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
