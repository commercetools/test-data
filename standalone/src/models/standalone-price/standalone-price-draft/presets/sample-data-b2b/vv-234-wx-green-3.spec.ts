import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen3 from './vv-234-wx-green-3';

describe(`with vv234WxGreen3 preset`, () => {
  it(`should return a vv234WxGreen3 preset`, () => {
    const vv234WxGreen3Preset = vv234WxGreen3().build<TStandalonePriceDraft>();
    expect(vv234WxGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-3",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a vv234WxGreen3 preset when built for graphql`, () => {
    const vv234WxGreen3PresetGraphql =
      vv234WxGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-3",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
