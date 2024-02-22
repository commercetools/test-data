import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed5 from './zz-456-st-red-5';

describe(`with zz456StRed5 preset`, () => {
  it(`should return a zz456StRed5 preset`, () => {
    const zz456StRed5Preset = zz456StRed5().build<TStandalonePriceDraft>();
    expect(zz456StRed5Preset).toMatchInlineSnapshot(`
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
        "key": "zz456-st-red-5",
        "sku": "zz456-st-red",
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

  it(`should return a zz456StRed5 preset when built for graphql`, () => {
    const zz456StRed5PresetGraphql =
      zz456StRed5().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "zz456-st-red-5",
        "sku": "zz456-st-red",
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
