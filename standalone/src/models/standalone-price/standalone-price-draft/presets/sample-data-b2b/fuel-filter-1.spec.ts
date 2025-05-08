import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter1 from './fuel-filter-1';

describe(`with fuelFilter1 preset`, () => {
  it(`should return a fuelFilter1 preset`, () => {
    const fuelFilter1Preset = fuelFilter1().build<TStandalonePriceDraft>();
    expect(fuelFilter1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-1",
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

  it(`should return a fuelFilter1 preset when built for graphql`, () => {
    const fuelFilter1PresetGraphql =
      fuelFilter1().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-1",
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
