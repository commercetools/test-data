import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue4 from './zz-456-st-blue-4';

describe(`with zz456StBlue4 preset`, () => {
  it(`should return a zz456StBlue4 preset`, () => {
    const zz456StBlue4Preset = zz456StBlue4().build<TStandalonePriceDraft>();
    expect(zz456StBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-4",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a zz456StBlue4 preset when built for graphql`, () => {
    const zz456StBlue4PresetGraphql =
      zz456StBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-4",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
