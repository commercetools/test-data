import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter2 from './fuel-filter-2';

describe(`with fuelFilter2 preset`, () => {
  it(`should return a fuelFilter2 preset`, () => {
    const fuelFilter2Preset = fuelFilter2().build<TStandalonePriceDraft>();
    expect(fuelFilter2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-2",
        "recurrencePolicy": undefined,
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

  it(`should return a fuelFilter2 preset when built for graphql`, () => {
    const fuelFilter2PresetGraphql =
      fuelFilter2().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-2",
        "recurrencePolicy": undefined,
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
