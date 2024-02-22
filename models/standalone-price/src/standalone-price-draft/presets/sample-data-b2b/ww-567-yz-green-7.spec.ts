import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen7 from './ww-567-yz-green-7';

describe(`with ww567YzGreen7 preset`, () => {
  it(`should return a ww567YzGreen7 preset`, () => {
    const ww567YzGreen7Preset = ww567YzGreen7().build<TStandalonePriceDraft>();
    expect(ww567YzGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-7",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen7 preset when built for graphql`, () => {
    const ww567YzGreen7PresetGraphql =
      ww567YzGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-7",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
