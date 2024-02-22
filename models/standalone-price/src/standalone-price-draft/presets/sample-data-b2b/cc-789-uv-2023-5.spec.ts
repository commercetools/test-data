import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20235 from './cc-789-uv-2023-5';

describe(`with cc789Uv20235 preset`, () => {
  it(`should return a cc789Uv20235 preset`, () => {
    const cc789Uv20235Preset = cc789Uv20235().build<TStandalonePriceDraft>();
    expect(cc789Uv20235Preset).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2023-5",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20235 preset when built for graphql`, () => {
    const cc789Uv20235PresetGraphql =
      cc789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2023-5",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
