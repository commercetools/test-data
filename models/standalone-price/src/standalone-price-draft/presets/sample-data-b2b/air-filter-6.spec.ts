import type { TStandalonePriceDraft } from '../../../types';
import airFilter6 from './air-filter-6';

describe(`with airFilter6 preset`, () => {
  it(`should return a airFilter6 preset`, () => {
    const airFilter6Preset = airFilter6().build<TStandalonePriceDraft>();
    expect(airFilter6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-6",
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

  it(`should return a airFilter6 preset when built for graphql`, () => {
    const airFilter6PresetGraphql =
      airFilter6().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-6",
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
