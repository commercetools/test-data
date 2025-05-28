import type { TStandalonePriceDraft } from '../../../types';
import airFilter7 from './air-filter-7';

describe(`with airFilter7 preset`, () => {
  it(`should return a airFilter7 preset`, () => {
    const airFilter7Preset = airFilter7().build<TStandalonePriceDraft>();
    expect(airFilter7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-7",
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

  it(`should return a airFilter7 preset when built for graphql`, () => {
    const airFilter7PresetGraphql =
      airFilter7().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-7",
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
