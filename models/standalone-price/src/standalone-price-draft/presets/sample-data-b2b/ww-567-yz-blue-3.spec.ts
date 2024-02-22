import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue3 from './ww-567-yz-blue-3';

describe(`with ww567YzBlue3 preset`, () => {
  it(`should return a ww567YzBlue3 preset`, () => {
    const ww567YzBlue3Preset = ww567YzBlue3().build<TStandalonePriceDraft>();
    expect(ww567YzBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-3",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6435000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ww567YzBlue3 preset when built for graphql`, () => {
    const ww567YzBlue3PresetGraphql =
      ww567YzBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-3",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6435000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
