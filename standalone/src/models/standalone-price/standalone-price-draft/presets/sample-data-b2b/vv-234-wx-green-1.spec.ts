import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen1 from './vv-234-wx-green-1';

describe(`with vv234WxGreen1 preset`, () => {
  it(`should return a vv234WxGreen1 preset`, () => {
    const vv234WxGreen1Preset = vv234WxGreen1().build<TStandalonePriceDraft>();
    expect(vv234WxGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-1",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5280000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a vv234WxGreen1 preset when built for graphql`, () => {
    const vv234WxGreen1PresetGraphql =
      vv234WxGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-1",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5280000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
