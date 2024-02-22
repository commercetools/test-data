import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed8 from './ccc-567-yz-red-8';

describe(`with ccc567YzRed8 preset`, () => {
  it(`should return a ccc567YzRed8 preset`, () => {
    const ccc567YzRed8Preset = ccc567YzRed8().build<TStandalonePriceDraft>();
    expect(ccc567YzRed8Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-red-8",
        "sku": "ccc567-yz-red",
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

  it(`should return a ccc567YzRed8 preset when built for graphql`, () => {
    const ccc567YzRed8PresetGraphql =
      ccc567YzRed8().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-red-8",
        "sku": "ccc567-yz-red",
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
