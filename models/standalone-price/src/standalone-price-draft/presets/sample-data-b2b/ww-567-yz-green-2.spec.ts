import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen2 from './ww-567-yz-green-2';

describe(`with ww567YzGreen2 preset`, () => {
  it(`should return a ww567YzGreen2 preset`, () => {
    const ww567YzGreen2Preset = ww567YzGreen2().build<TStandalonePriceDraft>();
    expect(ww567YzGreen2Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-green-2",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5445000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen2 preset when built for graphql`, () => {
    const ww567YzGreen2PresetGraphql =
      ww567YzGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-green-2",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5445000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
