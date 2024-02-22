import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20195 from './ii-789-uv-2019-5';

describe(`with ii789Uv20195 preset`, () => {
  it(`should return a ii789Uv20195 preset`, () => {
    const ii789Uv20195Preset = ii789Uv20195().build<TStandalonePriceDraft>();
    expect(ii789Uv20195Preset).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-5",
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20195 preset when built for graphql`, () => {
    const ii789Uv20195PresetGraphql =
      ii789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-5",
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
