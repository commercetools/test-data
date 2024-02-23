import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed7 from './ccc-567-yz-red-7';

describe(`with ccc567YzRed7 preset`, () => {
  it(`should return a ccc567YzRed7 preset`, () => {
    const ccc567YzRed7Preset = ccc567YzRed7().build<TStandalonePriceDraft>();
    expect(ccc567YzRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-7",
        "sku": "ccc567-yz-red",
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

  it(`should return a ccc567YzRed7 preset when built for graphql`, () => {
    const ccc567YzRed7PresetGraphql =
      ccc567YzRed7().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-7",
        "sku": "ccc567-yz-red",
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
