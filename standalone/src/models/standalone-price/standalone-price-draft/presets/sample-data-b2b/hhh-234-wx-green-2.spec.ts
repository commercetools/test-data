import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen2 from './hhh-234-wx-green-2';

describe(`with hhh234WxGreen2 preset`, () => {
  it(`should return a hhh234WxGreen2 preset`, () => {
    const hhh234WxGreen2Preset =
      hhh234WxGreen2().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-2",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxGreen2 preset when built for graphql`, () => {
    const hhh234WxGreen2PresetGraphql =
      hhh234WxGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-2",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
