import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen8 from './ccc-567-yz-green-8';

describe(`with ccc567YzGreen8 preset`, () => {
  it(`should return a ccc567YzGreen8 preset`, () => {
    const ccc567YzGreen8Preset =
      ccc567YzGreen8().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-8",
        "sku": "ccc567-yz-green",
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

  it(`should return a ccc567YzGreen8 preset when built for graphql`, () => {
    const ccc567YzGreen8PresetGraphql =
      ccc567YzGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-8",
        "sku": "ccc567-yz-green",
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
