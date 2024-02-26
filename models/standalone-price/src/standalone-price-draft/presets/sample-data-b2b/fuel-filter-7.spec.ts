import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter7 from './fuel-filter-7';

describe(`with fuelFilter7 preset`, () => {
  it(`should return a fuelFilter7 preset`, () => {
    const fuelFilter7Preset = fuelFilter7().build<TStandalonePriceDraft>();
    expect(fuelFilter7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-7",
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

  it(`should return a fuelFilter7 preset when built for graphql`, () => {
    const fuelFilter7PresetGraphql =
      fuelFilter7().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-7",
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
