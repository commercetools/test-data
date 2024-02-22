import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed6 from './hhh-234-wx-red-6';

describe(`with hhh234WxRed6 preset`, () => {
  it(`should return a hhh234WxRed6 preset`, () => {
    const hhh234WxRed6Preset = hhh234WxRed6().build<TStandalonePriceDraft>();
    expect(hhh234WxRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-6",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed6 preset when built for graphql`, () => {
    const hhh234WxRed6PresetGraphql =
      hhh234WxRed6().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-6",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
