import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue8 from './ww-567-yz-blue-8';

describe(`with ww567YzBlue8 preset`, () => {
  it(`should return a ww567YzBlue8 preset`, () => {
    const ww567YzBlue8Preset = ww567YzBlue8().build<TStandalonePriceDraft>();
    expect(ww567YzBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-8",
        "sku": "ww567-yz-blue",
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

  it(`should return a ww567YzBlue8 preset when built for graphql`, () => {
    const ww567YzBlue8PresetGraphql =
      ww567YzBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-8",
        "sku": "ww567-yz-blue",
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
