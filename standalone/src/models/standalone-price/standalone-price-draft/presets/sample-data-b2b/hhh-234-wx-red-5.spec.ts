import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed5 from './hhh-234-wx-red-5';

describe(`with hhh234WxRed5 preset`, () => {
  it(`should return a hhh234WxRed5 preset`, () => {
    const hhh234WxRed5Preset = hhh234WxRed5().build<TStandalonePriceDraft>();
    expect(hhh234WxRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-5",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed5 preset when built for graphql`, () => {
    const hhh234WxRed5PresetGraphql =
      hhh234WxRed5().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-5",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
