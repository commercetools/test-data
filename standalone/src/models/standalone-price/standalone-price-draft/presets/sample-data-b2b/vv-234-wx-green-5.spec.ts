import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen5 from './vv-234-wx-green-5';

describe(`with vv234WxGreen5 preset`, () => {
  it(`should return a vv234WxGreen5 preset`, () => {
    const vv234WxGreen5Preset = vv234WxGreen5().build<TStandalonePriceDraft>();
    expect(vv234WxGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-5",
        "sku": "vv234-wx-green",
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

  it(`should return a vv234WxGreen5 preset when built for graphql`, () => {
    const vv234WxGreen5PresetGraphql =
      vv234WxGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-5",
        "sku": "vv234-wx-green",
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
