import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen2 from './vv-234-wx-green-2';

describe(`with vv234WxGreen2 preset`, () => {
  it(`should return a vv234WxGreen2 preset`, () => {
    const vv234WxGreen2Preset = vv234WxGreen2().build<TStandalonePriceDraft>();
    expect(vv234WxGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-2",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4840000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxGreen2 preset when built for graphql`, () => {
    const vv234WxGreen2PresetGraphql =
      vv234WxGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-2",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4840000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
