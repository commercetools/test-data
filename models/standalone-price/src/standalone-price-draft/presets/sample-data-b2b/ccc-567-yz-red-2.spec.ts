import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed2 from './ccc-567-yz-red-2';

describe(`with ccc567YzRed2 preset`, () => {
  it(`should return a ccc567YzRed2 preset`, () => {
    const ccc567YzRed2Preset = ccc567YzRed2().build<TStandalonePriceDraft>();
    expect(ccc567YzRed2Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-red-2",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8910000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzRed2 preset when built for graphql`, () => {
    const ccc567YzRed2PresetGraphql =
      ccc567YzRed2().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-red-2",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8910000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
