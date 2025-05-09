import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20235 from './w-789-uv-2023-5';

describe(`with w789Uv20235 preset`, () => {
  it(`should return a w789Uv20235 preset`, () => {
    const w789Uv20235Preset = w789Uv20235().build<TStandalonePriceDraft>();
    expect(w789Uv20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-5",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20235 preset when built for graphql`, () => {
    const w789Uv20235PresetGraphql =
      w789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-5",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
