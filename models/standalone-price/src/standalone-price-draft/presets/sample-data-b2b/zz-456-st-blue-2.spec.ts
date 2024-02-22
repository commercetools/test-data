import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue2 from './zz-456-st-blue-2';

describe(`with zz456StBlue2 preset`, () => {
  it(`should return a zz456StBlue2 preset`, () => {
    const zz456StBlue2Preset = zz456StBlue2().build<TStandalonePriceDraft>();
    expect(zz456StBlue2Preset).toMatchInlineSnapshot(`
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
        "key": "zz456-st-blue-2",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a zz456StBlue2 preset when built for graphql`, () => {
    const zz456StBlue2PresetGraphql =
      zz456StBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "zz456-st-blue-2",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
