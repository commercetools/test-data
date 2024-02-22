import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen4 from './ccc-567-yz-green-4';

describe(`with ccc567YzGreen4 preset`, () => {
  it(`should return a ccc567YzGreen4 preset`, () => {
    const ccc567YzGreen4Preset =
      ccc567YzGreen4().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-4",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ccc567YzGreen4 preset when built for graphql`, () => {
    const ccc567YzGreen4PresetGraphql =
      ccc567YzGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-4",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
