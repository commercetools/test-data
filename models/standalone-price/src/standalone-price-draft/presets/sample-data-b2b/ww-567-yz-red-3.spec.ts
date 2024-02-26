import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed3 from './ww-567-yz-red-3';

describe(`with ww567YzRed3 preset`, () => {
  it(`should return a ww567YzRed3 preset`, () => {
    const ww567YzRed3Preset = ww567YzRed3().build<TStandalonePriceDraft>();
    expect(ww567YzRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-3",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5940000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ww567YzRed3 preset when built for graphql`, () => {
    const ww567YzRed3PresetGraphql =
      ww567YzRed3().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-3",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5940000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
