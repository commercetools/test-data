import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue7 from './zz-456-st-blue-7';

describe(`with zz456StBlue7 preset`, () => {
  it(`should return a zz456StBlue7 preset`, () => {
    const zz456StBlue7Preset = zz456StBlue7().build<TStandalonePriceDraft>();
    expect(zz456StBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-7",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StBlue7 preset when built for graphql`, () => {
    const zz456StBlue7PresetGraphql =
      zz456StBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-7",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
