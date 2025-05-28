import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue1 from './hhh-234-wx-blue-1';

describe(`with hhh234WxBlue1 preset`, () => {
  it(`should return a hhh234WxBlue1 preset`, () => {
    const hhh234WxBlue1Preset = hhh234WxBlue1().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-1",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hhh234WxBlue1 preset when built for graphql`, () => {
    const hhh234WxBlue1PresetGraphql =
      hhh234WxBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-1",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
