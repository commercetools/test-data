import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue5 from './hhh-234-wx-blue-5';

describe(`with hhh234WxBlue5 preset`, () => {
  it(`should return a hhh234WxBlue5 preset`, () => {
    const hhh234WxBlue5Preset = hhh234WxBlue5().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-5",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
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

  it(`should return a hhh234WxBlue5 preset when built for graphql`, () => {
    const hhh234WxBlue5PresetGraphql =
      hhh234WxBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-5",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
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
