import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen3 from './bbb-234-wx-green-3';

describe(`with bbb234WxGreen3 preset`, () => {
  it(`should return a bbb234WxGreen3 preset`, () => {
    const bbb234WxGreen3Preset =
      bbb234WxGreen3().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-green-3",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen3 preset when built for graphql`, () => {
    const bbb234WxGreen3PresetGraphql =
      bbb234WxGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-green-3",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
