import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter4 from './fuel-filter-4';

describe(`with fuelFilter4 preset`, () => {
  it(`should return a fuelFilter4 preset`, () => {
    const fuelFilter4Preset = fuelFilter4().build<TStandalonePriceDraft>();
    expect(fuelFilter4Preset).toMatchInlineSnapshot(`
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
        "key": "fuel-filter-4",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3250,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a fuelFilter4 preset when built for graphql`, () => {
    const fuelFilter4PresetGraphql =
      fuelFilter4().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fuel-filter-4",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3250,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
