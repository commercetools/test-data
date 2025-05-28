import type { TStandalonePriceDraft } from '../../../types';
import fuelFilter6 from './fuel-filter-6';

describe(`with fuelFilter6 preset`, () => {
  it(`should return a fuelFilter6 preset`, () => {
    const fuelFilter6Preset = fuelFilter6().build<TStandalonePriceDraft>();
    expect(fuelFilter6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-6",
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

  it(`should return a fuelFilter6 preset when built for graphql`, () => {
    const fuelFilter6PresetGraphql =
      fuelFilter6().buildGraphql<TStandalonePriceDraft>();
    expect(fuelFilter6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fuel-filter-6",
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
