import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed4 from './hhh-234-wx-red-4';

describe(`with hhh234WxRed4 preset`, () => {
  it(`should return a hhh234WxRed4 preset`, () => {
    const hhh234WxRed4Preset = hhh234WxRed4().build<TStandalonePriceDraft>();
    expect(hhh234WxRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-4",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed4 preset when built for graphql`, () => {
    const hhh234WxRed4PresetGraphql =
      hhh234WxRed4().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-4",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
