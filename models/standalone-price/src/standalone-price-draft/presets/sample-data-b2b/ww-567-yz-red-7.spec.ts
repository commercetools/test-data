import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed7 from './ww-567-yz-red-7';

describe(`with ww567YzRed7 preset`, () => {
  it(`should return a ww567YzRed7 preset`, () => {
    const ww567YzRed7Preset = ww567YzRed7().build<TStandalonePriceDraft>();
    expect(ww567YzRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-7",
        "sku": "ww567-yz-red",
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

  it(`should return a ww567YzRed7 preset when built for graphql`, () => {
    const ww567YzRed7PresetGraphql =
      ww567YzRed7().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-7",
        "sku": "ww567-yz-red",
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
