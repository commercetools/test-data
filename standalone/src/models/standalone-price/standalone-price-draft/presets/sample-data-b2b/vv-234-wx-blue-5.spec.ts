import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue5 from './vv-234-wx-blue-5';

describe(`with vv234WxBlue5 preset`, () => {
  it(`should return a vv234WxBlue5 preset`, () => {
    const vv234WxBlue5Preset = vv234WxBlue5().build<TStandalonePriceDraft>();
    expect(vv234WxBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-5",
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxBlue5 preset when built for graphql`, () => {
    const vv234WxBlue5PresetGraphql =
      vv234WxBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-5",
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
