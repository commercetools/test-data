import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue7 from './ccc-567-yz-blue-7';

describe(`with ccc567YzBlue7 preset`, () => {
  it(`should return a ccc567YzBlue7 preset`, () => {
    const ccc567YzBlue7Preset = ccc567YzBlue7().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-7",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue7 preset when built for graphql`, () => {
    const ccc567YzBlue7PresetGraphql =
      ccc567YzBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-7",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
