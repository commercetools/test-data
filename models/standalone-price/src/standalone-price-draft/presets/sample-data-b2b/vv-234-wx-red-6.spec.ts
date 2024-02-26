import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed6 from './vv-234-wx-red-6';

describe(`with vv234WxRed6 preset`, () => {
  it(`should return a vv234WxRed6 preset`, () => {
    const vv234WxRed6Preset = vv234WxRed6().build<TStandalonePriceDraft>();
    expect(vv234WxRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-6",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxRed6 preset when built for graphql`, () => {
    const vv234WxRed6PresetGraphql =
      vv234WxRed6().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-6",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
