import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20196 from './s-567-uv-2019-6';

describe(`with s567Uv20196 preset`, () => {
  it(`should return a s567Uv20196 preset`, () => {
    const s567Uv20196Preset = s567Uv20196().build<TStandalonePriceDraft>();
    expect(s567Uv20196Preset).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2019-6",
        "sku": "s567-uv-2019",
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

  it(`should return a s567Uv20196 preset when built for graphql`, () => {
    const s567Uv20196PresetGraphql =
      s567Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2019-6",
        "sku": "s567-uv-2019",
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
