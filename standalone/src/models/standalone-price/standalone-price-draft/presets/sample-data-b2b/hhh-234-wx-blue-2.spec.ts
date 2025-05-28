import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue2 from './hhh-234-wx-blue-2';

describe(`with hhh234WxBlue2 preset`, () => {
  it(`should return a hhh234WxBlue2 preset`, () => {
    const hhh234WxBlue2Preset = hhh234WxBlue2().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-2",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxBlue2 preset when built for graphql`, () => {
    const hhh234WxBlue2PresetGraphql =
      hhh234WxBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-2",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
