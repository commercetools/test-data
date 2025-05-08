import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed1 from './ww-567-yz-red-1';

describe(`with ww567YzRed1 preset`, () => {
  it(`should return a ww567YzRed1 preset`, () => {
    const ww567YzRed1Preset = ww567YzRed1().build<TStandalonePriceDraft>();
    expect(ww567YzRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-1",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ww567YzRed1 preset when built for graphql`, () => {
    const ww567YzRed1PresetGraphql =
      ww567YzRed1().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-1",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
