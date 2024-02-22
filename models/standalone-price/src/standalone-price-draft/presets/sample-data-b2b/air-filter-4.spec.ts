import type { TStandalonePriceDraft } from '../../../types';
import airFilter4 from './air-filter-4';

describe(`with airFilter4 preset`, () => {
  it(`should return a airFilter4 preset`, () => {
    const airFilter4Preset = airFilter4().build<TStandalonePriceDraft>();
    expect(airFilter4Preset).toMatchInlineSnapshot(`
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
        "key": "air-filter-4",
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a airFilter4 preset when built for graphql`, () => {
    const airFilter4PresetGraphql =
      airFilter4().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "air-filter-4",
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
