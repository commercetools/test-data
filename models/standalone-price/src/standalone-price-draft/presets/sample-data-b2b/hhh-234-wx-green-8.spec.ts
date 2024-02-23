import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen8 from './hhh-234-wx-green-8';

describe(`with hhh234WxGreen8 preset`, () => {
  it(`should return a hhh234WxGreen8 preset`, () => {
    const hhh234WxGreen8Preset =
      hhh234WxGreen8().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-8",
        "sku": "hhh234-wx-green",
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

  it(`should return a hhh234WxGreen8 preset when built for graphql`, () => {
    const hhh234WxGreen8PresetGraphql =
      hhh234WxGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-8",
        "sku": "hhh234-wx-green",
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
