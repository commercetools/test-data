import type { TStandalonePriceDraft } from '../../../types';
import airFilter5 from './air-filter-5';

describe(`with airFilter5 preset`, () => {
  it(`should return a airFilter5 preset`, () => {
    const airFilter5Preset = airFilter5().build<TStandalonePriceDraft>();
    expect(airFilter5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-5",
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

  it(`should return a airFilter5 preset when built for graphql`, () => {
    const airFilter5PresetGraphql =
      airFilter5().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-5",
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
