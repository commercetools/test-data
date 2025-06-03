import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen4 from './hhh-234-wx-green-4';

describe(`with hhh234WxGreen4 preset`, () => {
  it(`should return a hhh234WxGreen4 preset`, () => {
    const hhh234WxGreen4Preset =
      hhh234WxGreen4().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-4",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-green",
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

  it(`should return a hhh234WxGreen4 preset when built for graphql`, () => {
    const hhh234WxGreen4PresetGraphql =
      hhh234WxGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-4",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-green",
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
