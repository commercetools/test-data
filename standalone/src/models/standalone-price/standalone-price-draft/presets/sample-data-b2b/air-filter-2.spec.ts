import type { TStandalonePriceDraft } from '../../../types';
import airFilter2 from './air-filter-2';

describe(`with airFilter2 preset`, () => {
  it(`should return a airFilter2 preset`, () => {
    const airFilter2Preset = airFilter2().build<TStandalonePriceDraft>();
    expect(airFilter2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-2",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a airFilter2 preset when built for graphql`, () => {
    const airFilter2PresetGraphql =
      airFilter2().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-2",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
