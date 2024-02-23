import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed4 from './vv-234-wx-red-4';

describe(`with vv234WxRed4 preset`, () => {
  it(`should return a vv234WxRed4 preset`, () => {
    const vv234WxRed4Preset = vv234WxRed4().build<TStandalonePriceDraft>();
    expect(vv234WxRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-4",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a vv234WxRed4 preset when built for graphql`, () => {
    const vv234WxRed4PresetGraphql =
      vv234WxRed4().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-4",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
