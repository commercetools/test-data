import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue7 from './ww-567-yz-blue-7';

describe(`with ww567YzBlue7 preset`, () => {
  it(`should return a ww567YzBlue7 preset`, () => {
    const ww567YzBlue7Preset = ww567YzBlue7().build<TStandalonePriceDraft>();
    expect(ww567YzBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-7",
        "sku": "ww567-yz-blue",
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

  it(`should return a ww567YzBlue7 preset when built for graphql`, () => {
    const ww567YzBlue7PresetGraphql =
      ww567YzBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-7",
        "sku": "ww567-yz-blue",
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
