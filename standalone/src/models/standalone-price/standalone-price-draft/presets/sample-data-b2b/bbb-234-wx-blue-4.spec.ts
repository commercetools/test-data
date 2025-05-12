import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue4 from './bbb-234-wx-blue-4';

describe(`with bbb234WxBlue4 preset`, () => {
  it(`should return a bbb234WxBlue4 preset`, () => {
    const bbb234WxBlue4Preset = bbb234WxBlue4().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-4",
        "sku": "bbb234-wx-blue",
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

  it(`should return a bbb234WxBlue4 preset when built for graphql`, () => {
    const bbb234WxBlue4PresetGraphql =
      bbb234WxBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-4",
        "sku": "bbb234-wx-blue",
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
