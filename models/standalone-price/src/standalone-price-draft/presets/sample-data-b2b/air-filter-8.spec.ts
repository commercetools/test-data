import type { TStandalonePriceDraft } from '../../../types';
import airFilter8 from './air-filter-8';

describe(`with airFilter8 preset`, () => {
  it(`should return a airFilter8 preset`, () => {
    const airFilter8Preset = airFilter8().build<TStandalonePriceDraft>();
    expect(airFilter8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-8",
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

  it(`should return a airFilter8 preset when built for graphql`, () => {
    const airFilter8PresetGraphql =
      airFilter8().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-8",
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
