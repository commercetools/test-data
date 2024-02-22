import type { TStandalonePriceDraft } from '../../../types';
import oilFilter5 from './oil-filter-5';

describe(`with oilFilter5 preset`, () => {
  it(`should return a oilFilter5 preset`, () => {
    const oilFilter5Preset = oilFilter5().build<TStandalonePriceDraft>();
    expect(oilFilter5Preset).toMatchInlineSnapshot(`
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
        "key": "oil-filter-5",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oilFilter5 preset when built for graphql`, () => {
    const oilFilter5PresetGraphql =
      oilFilter5().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oil-filter-5",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
