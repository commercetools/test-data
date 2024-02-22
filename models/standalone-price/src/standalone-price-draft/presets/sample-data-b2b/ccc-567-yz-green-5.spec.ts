import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen5 from './ccc-567-yz-green-5';

describe(`with ccc567YzGreen5 preset`, () => {
  it(`should return a ccc567YzGreen5 preset`, () => {
    const ccc567YzGreen5Preset =
      ccc567YzGreen5().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen5Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-green-5",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzGreen5 preset when built for graphql`, () => {
    const ccc567YzGreen5PresetGraphql =
      ccc567YzGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-green-5",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
