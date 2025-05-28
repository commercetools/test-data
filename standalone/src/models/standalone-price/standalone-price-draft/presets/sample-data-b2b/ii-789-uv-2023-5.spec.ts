import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20235 from './ii-789-uv-2023-5';

describe(`with ii789Uv20235 preset`, () => {
  it(`should return a ii789Uv20235 preset`, () => {
    const ii789Uv20235Preset = ii789Uv20235().build<TStandalonePriceDraft>();
    expect(ii789Uv20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-5",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2023",
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

  it(`should return a ii789Uv20235 preset when built for graphql`, () => {
    const ii789Uv20235PresetGraphql =
      ii789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-5",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2023",
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
