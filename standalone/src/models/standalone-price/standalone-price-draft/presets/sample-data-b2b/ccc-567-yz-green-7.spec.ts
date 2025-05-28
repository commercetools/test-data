import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen7 from './ccc-567-yz-green-7';

describe(`with ccc567YzGreen7 preset`, () => {
  it(`should return a ccc567YzGreen7 preset`, () => {
    const ccc567YzGreen7Preset =
      ccc567YzGreen7().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-7",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-green",
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

  it(`should return a ccc567YzGreen7 preset when built for graphql`, () => {
    const ccc567YzGreen7PresetGraphql =
      ccc567YzGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-7",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-green",
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
