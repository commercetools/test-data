import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue3 from './ccc-567-yz-blue-3';

describe(`with ccc567YzBlue3 preset`, () => {
  it(`should return a ccc567YzBlue3 preset`, () => {
    const ccc567YzBlue3Preset = ccc567YzBlue3().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-3",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12870000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue3 preset when built for graphql`, () => {
    const ccc567YzBlue3PresetGraphql =
      ccc567YzBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-3",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12870000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
