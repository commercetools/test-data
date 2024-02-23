import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue1 from './vv-234-wx-blue-1';

describe(`with vv234WxBlue1 preset`, () => {
  it(`should return a vv234WxBlue1 preset`, () => {
    const vv234WxBlue1Preset = vv234WxBlue1().build<TStandalonePriceDraft>();
    expect(vv234WxBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-1",
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4840000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a vv234WxBlue1 preset when built for graphql`, () => {
    const vv234WxBlue1PresetGraphql =
      vv234WxBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-1",
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4840000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
