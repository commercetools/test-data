import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen8 from './ww-567-yz-green-8';

describe(`with ww567YzGreen8 preset`, () => {
  it(`should return a ww567YzGreen8 preset`, () => {
    const ww567YzGreen8Preset = ww567YzGreen8().build<TStandalonePriceDraft>();
    expect(ww567YzGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-8",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen8 preset when built for graphql`, () => {
    const ww567YzGreen8PresetGraphql =
      ww567YzGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-8",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
