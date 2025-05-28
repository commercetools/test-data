import type { TStandalonePriceDraft } from '../../../types';
import airFilter3 from './air-filter-3';

describe(`with airFilter3 preset`, () => {
  it(`should return a airFilter3 preset`, () => {
    const airFilter3Preset = airFilter3().build<TStandalonePriceDraft>();
    expect(airFilter3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-3",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a airFilter3 preset when built for graphql`, () => {
    const airFilter3PresetGraphql =
      airFilter3().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-3",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
