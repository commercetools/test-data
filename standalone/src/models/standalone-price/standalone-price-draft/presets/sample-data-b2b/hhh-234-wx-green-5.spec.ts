import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen5 from './hhh-234-wx-green-5';

describe(`with hhh234WxGreen5 preset`, () => {
  it(`should return a hhh234WxGreen5 preset`, () => {
    const hhh234WxGreen5Preset =
      hhh234WxGreen5().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-5",
        "sku": "hhh234-wx-green",
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

  it(`should return a hhh234WxGreen5 preset when built for graphql`, () => {
    const hhh234WxGreen5PresetGraphql =
      hhh234WxGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-5",
        "sku": "hhh234-wx-green",
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
