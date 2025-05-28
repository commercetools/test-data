import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20235 from './i-789-uv-2023-5';

describe(`with i789Uv20235 preset`, () => {
  it(`should return a i789Uv20235 preset`, () => {
    const i789Uv20235Preset = i789Uv20235().build<TStandalonePriceDraft>();
    expect(i789Uv20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-5",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1260000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20235 preset when built for graphql`, () => {
    const i789Uv20235PresetGraphql =
      i789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-5",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1260000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
