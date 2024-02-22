import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen3 from './hhh-234-wx-green-3';

describe(`with hhh234WxGreen3 preset`, () => {
  it(`should return a hhh234WxGreen3 preset`, () => {
    const hhh234WxGreen3Preset =
      hhh234WxGreen3().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-green-3",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 15400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxGreen3 preset when built for graphql`, () => {
    const hhh234WxGreen3PresetGraphql =
      hhh234WxGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-green-3",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 15400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
