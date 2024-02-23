import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed5 from './vv-234-wx-red-5';

describe(`with vv234WxRed5 preset`, () => {
  it(`should return a vv234WxRed5 preset`, () => {
    const vv234WxRed5Preset = vv234WxRed5().build<TStandalonePriceDraft>();
    expect(vv234WxRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-5",
        "sku": "vv234-wx-red",
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

  it(`should return a vv234WxRed5 preset when built for graphql`, () => {
    const vv234WxRed5PresetGraphql =
      vv234WxRed5().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-5",
        "sku": "vv234-wx-red",
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
