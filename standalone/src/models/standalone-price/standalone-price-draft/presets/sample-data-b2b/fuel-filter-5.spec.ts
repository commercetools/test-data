import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter5 from './fuel-filter-5';

describe(`with fuelFilter5 preset`, () => {
  it(`should return a fuelFilter5 preset`, () => {
    const fuelFilter5Preset = fuelFilter5().build<TStandalonePriceDraft>();
    expect(fuelFilter5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-5",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3250,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fuelFilter5 preset when built for graphql`, () => {
    const fuelFilter5PresetGraphql =
      fuelFilter5().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-5",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3250,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
