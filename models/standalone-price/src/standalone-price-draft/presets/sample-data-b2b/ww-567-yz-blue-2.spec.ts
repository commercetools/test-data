import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue2 from './ww-567-yz-blue-2';

describe(`with ww567YzBlue2 preset`, () => {
  it(`should return a ww567YzBlue2 preset`, () => {
    const ww567YzBlue2Preset = ww567YzBlue2().build<TStandalonePriceDraft>();
    expect(ww567YzBlue2Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-2",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzBlue2 preset when built for graphql`, () => {
    const ww567YzBlue2PresetGraphql =
      ww567YzBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-2",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
