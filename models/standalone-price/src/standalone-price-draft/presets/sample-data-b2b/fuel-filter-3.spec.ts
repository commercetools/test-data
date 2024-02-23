import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter3 from './fuel-filter-3';

describe(`with fuelFilter3 preset`, () => {
  it(`should return a fuelFilter3 preset`, () => {
    const fuelFilter3Preset = fuelFilter3().build<TStandalonePriceDraft>();
    expect(fuelFilter3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-3",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3250,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fuelFilter3 preset when built for graphql`, () => {
    const fuelFilter3PresetGraphql =
      fuelFilter3().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-3",
        "sku": "fuel-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3250,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
