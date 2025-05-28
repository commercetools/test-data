import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter8 from './fuel-filter-8';

describe(`with fuelFilter8 preset`, () => {
  it(`should return a fuelFilter8 preset`, () => {
    const fuelFilter8Preset = fuelFilter8().build<TStandalonePriceDraft>();
    expect(fuelFilter8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-8",
        "recurrencePolicy": undefined,
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

  it(`should return a fuelFilter8 preset when built for graphql`, () => {
    const fuelFilter8PresetGraphql =
      fuelFilter8().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-8",
        "recurrencePolicy": undefined,
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
