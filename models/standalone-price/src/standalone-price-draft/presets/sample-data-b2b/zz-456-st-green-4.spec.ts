import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen4 from './zz-456-st-green-4';

describe(`with zz456StGreen4 preset`, () => {
  it(`should return a zz456StGreen4 preset`, () => {
    const zz456StGreen4Preset = zz456StGreen4().build<TStandalonePriceDraft>();
    expect(zz456StGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-4",
        "sku": "zz456-st-green",
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

  it(`should return a zz456StGreen4 preset when built for graphql`, () => {
    const zz456StGreen4PresetGraphql =
      zz456StGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-4",
        "sku": "zz456-st-green",
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
