import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20236 from './s-567-uv-2023-6';

describe(`with s567Uv20236 preset`, () => {
  it(`should return a s567Uv20236 preset`, () => {
    const s567Uv20236Preset = s567Uv20236().build<TStandalonePriceDraft>();
    expect(s567Uv20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-6",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20236 preset when built for graphql`, () => {
    const s567Uv20236PresetGraphql =
      s567Uv20236().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-6",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
