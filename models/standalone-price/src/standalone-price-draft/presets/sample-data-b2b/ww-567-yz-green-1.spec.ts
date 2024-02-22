import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen1 from './ww-567-yz-green-1';

describe(`with ww567YzGreen1 preset`, () => {
  it(`should return a ww567YzGreen1 preset`, () => {
    const ww567YzGreen1Preset = ww567YzGreen1().build<TStandalonePriceDraft>();
    expect(ww567YzGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-green-1",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5940000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen1 preset when built for graphql`, () => {
    const ww567YzGreen1PresetGraphql =
      ww567YzGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-green-1",
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5940000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
