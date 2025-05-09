import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue4 from './hhh-234-wx-blue-4';

describe(`with hhh234WxBlue4 preset`, () => {
  it(`should return a hhh234WxBlue4 preset`, () => {
    const hhh234WxBlue4Preset = hhh234WxBlue4().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-4",
        "sku": "hhh234-wx-blue",
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

  it(`should return a hhh234WxBlue4 preset when built for graphql`, () => {
    const hhh234WxBlue4PresetGraphql =
      hhh234WxBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-4",
        "sku": "hhh234-wx-blue",
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
