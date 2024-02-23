import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen2 from './ccc-567-yz-green-2';

describe(`with ccc567YzGreen2 preset`, () => {
  it(`should return a ccc567YzGreen2 preset`, () => {
    const ccc567YzGreen2Preset =
      ccc567YzGreen2().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-2",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10890000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzGreen2 preset when built for graphql`, () => {
    const ccc567YzGreen2PresetGraphql =
      ccc567YzGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-2",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10890000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
