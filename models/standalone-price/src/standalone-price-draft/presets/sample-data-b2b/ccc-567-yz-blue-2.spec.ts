import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue2 from './ccc-567-yz-blue-2';

describe(`with ccc567YzBlue2 preset`, () => {
  it(`should return a ccc567YzBlue2 preset`, () => {
    const ccc567YzBlue2Preset = ccc567YzBlue2().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-2",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue2 preset when built for graphql`, () => {
    const ccc567YzBlue2PresetGraphql =
      ccc567YzBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-2",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
