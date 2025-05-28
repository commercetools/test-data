import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue2 from './vv-234-wx-blue-2';

describe(`with vv234WxBlue2 preset`, () => {
  it(`should return a vv234WxBlue2 preset`, () => {
    const vv234WxBlue2Preset = vv234WxBlue2().build<TStandalonePriceDraft>();
    expect(vv234WxBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-2",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxBlue2 preset when built for graphql`, () => {
    const vv234WxBlue2PresetGraphql =
      vv234WxBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-2",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
