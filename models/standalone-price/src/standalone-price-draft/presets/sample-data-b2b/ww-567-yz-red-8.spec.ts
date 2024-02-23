import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed8 from './ww-567-yz-red-8';

describe(`with ww567YzRed8 preset`, () => {
  it(`should return a ww567YzRed8 preset`, () => {
    const ww567YzRed8Preset = ww567YzRed8().build<TStandalonePriceDraft>();
    expect(ww567YzRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-8",
        "sku": "ww567-yz-red",
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

  it(`should return a ww567YzRed8 preset when built for graphql`, () => {
    const ww567YzRed8PresetGraphql =
      ww567YzRed8().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-8",
        "sku": "ww567-yz-red",
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
