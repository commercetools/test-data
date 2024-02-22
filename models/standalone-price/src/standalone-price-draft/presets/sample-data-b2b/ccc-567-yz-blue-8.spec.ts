import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue8 from './ccc-567-yz-blue-8';

describe(`with ccc567YzBlue8 preset`, () => {
  it(`should return a ccc567YzBlue8 preset`, () => {
    const ccc567YzBlue8Preset = ccc567YzBlue8().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue8Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-8",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue8 preset when built for graphql`, () => {
    const ccc567YzBlue8PresetGraphql =
      ccc567YzBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-8",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
