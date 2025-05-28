import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen1 from './hhh-234-wx-green-1';

describe(`with hhh234WxGreen1 preset`, () => {
  it(`should return a hhh234WxGreen1 preset`, () => {
    const hhh234WxGreen1Preset =
      hhh234WxGreen1().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-1",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hhh234WxGreen1 preset when built for graphql`, () => {
    const hhh234WxGreen1PresetGraphql =
      hhh234WxGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-1",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
