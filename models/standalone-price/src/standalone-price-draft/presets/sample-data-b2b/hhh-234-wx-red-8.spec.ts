import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed8 from './hhh-234-wx-red-8';

describe(`with hhh234WxRed8 preset`, () => {
  it(`should return a hhh234WxRed8 preset`, () => {
    const hhh234WxRed8Preset = hhh234WxRed8().build<TStandalonePriceDraft>();
    expect(hhh234WxRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-8",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed8 preset when built for graphql`, () => {
    const hhh234WxRed8PresetGraphql =
      hhh234WxRed8().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-8",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
