import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20235 from './s-567-uv-2023-5';

describe(`with s567Uv20235 preset`, () => {
  it(`should return a s567Uv20235 preset`, () => {
    const s567Uv20235Preset = s567Uv20235().build<TStandalonePriceDraft>();
    expect(s567Uv20235Preset).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2023-5",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20235 preset when built for graphql`, () => {
    const s567Uv20235PresetGraphql =
      s567Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2023-5",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
