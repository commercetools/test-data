import type { TStandalonePriceDraft } from '../../../types';
import oilFilter4 from './oil-filter-4';

describe(`with oilFilter4 preset`, () => {
  it(`should return a oilFilter4 preset`, () => {
    const oilFilter4Preset = oilFilter4().build<TStandalonePriceDraft>();
    expect(oilFilter4Preset).toMatchInlineSnapshot(`
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
        "key": "oil-filter-4",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oilFilter4 preset when built for graphql`, () => {
    const oilFilter4PresetGraphql =
      oilFilter4().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oil-filter-4",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
