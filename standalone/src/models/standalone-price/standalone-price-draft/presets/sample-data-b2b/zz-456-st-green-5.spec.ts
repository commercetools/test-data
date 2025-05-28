import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen5 from './zz-456-st-green-5';

describe(`with zz456StGreen5 preset`, () => {
  it(`should return a zz456StGreen5 preset`, () => {
    const zz456StGreen5Preset = zz456StGreen5().build<TStandalonePriceDraft>();
    expect(zz456StGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-5",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
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

  it(`should return a zz456StGreen5 preset when built for graphql`, () => {
    const zz456StGreen5PresetGraphql =
      zz456StGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-5",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
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
