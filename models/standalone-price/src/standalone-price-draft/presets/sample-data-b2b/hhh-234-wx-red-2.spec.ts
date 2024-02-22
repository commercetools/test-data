import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed2 from './hhh-234-wx-red-2';

describe(`with hhh234WxRed2 preset`, () => {
  it(`should return a hhh234WxRed2 preset`, () => {
    const hhh234WxRed2Preset = hhh234WxRed2().build<TStandalonePriceDraft>();
    expect(hhh234WxRed2Preset).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-red-2",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed2 preset when built for graphql`, () => {
    const hhh234WxRed2PresetGraphql =
      hhh234WxRed2().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-red-2",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
