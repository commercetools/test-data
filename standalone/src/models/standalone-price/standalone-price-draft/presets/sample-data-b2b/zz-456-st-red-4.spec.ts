import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed4 from './zz-456-st-red-4';

describe(`with zz456StRed4 preset`, () => {
  it(`should return a zz456StRed4 preset`, () => {
    const zz456StRed4Preset = zz456StRed4().build<TStandalonePriceDraft>();
    expect(zz456StRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-4",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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

  it(`should return a zz456StRed4 preset when built for graphql`, () => {
    const zz456StRed4PresetGraphql =
      zz456StRed4().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-4",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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
