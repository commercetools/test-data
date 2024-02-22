import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue3 from './hhh-234-wx-blue-3';

describe(`with hhh234WxBlue3 preset`, () => {
  it(`should return a hhh234WxBlue3 preset`, () => {
    const hhh234WxBlue3Preset = hhh234WxBlue3().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-blue-3",
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 14300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxBlue3 preset when built for graphql`, () => {
    const hhh234WxBlue3PresetGraphql =
      hhh234WxBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-blue-3",
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 14300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
