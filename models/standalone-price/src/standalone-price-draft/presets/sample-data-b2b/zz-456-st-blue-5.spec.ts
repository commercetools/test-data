import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue5 from './zz-456-st-blue-5';

describe(`with zz456StBlue5 preset`, () => {
  it(`should return a zz456StBlue5 preset`, () => {
    const zz456StBlue5Preset = zz456StBlue5().build<TStandalonePriceDraft>();
    expect(zz456StBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-5",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a zz456StBlue5 preset when built for graphql`, () => {
    const zz456StBlue5PresetGraphql =
      zz456StBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-5",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
