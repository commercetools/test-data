import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20235 from './c-789-uv-2023-5';

describe(`with c789Uv20235 preset`, () => {
  it(`should return a c789Uv20235 preset`, () => {
    const c789Uv20235Preset = c789Uv20235().build<TStandalonePriceDraft>();
    expect(c789Uv20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-5",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20235 preset when built for graphql`, () => {
    const c789Uv20235PresetGraphql =
      c789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-5",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
