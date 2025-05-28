import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed3 from './hhh-234-wx-red-3';

describe(`with hhh234WxRed3 preset`, () => {
  it(`should return a hhh234WxRed3 preset`, () => {
    const hhh234WxRed3Preset = hhh234WxRed3().build<TStandalonePriceDraft>();
    expect(hhh234WxRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-3",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed3 preset when built for graphql`, () => {
    const hhh234WxRed3PresetGraphql =
      hhh234WxRed3().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-3",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
