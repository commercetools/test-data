import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20196 from './i-789-uv-2019-6';

describe(`with i789Uv20196 preset`, () => {
  it(`should return a i789Uv20196 preset`, () => {
    const i789Uv20196Preset = i789Uv20196().build<TStandalonePriceDraft>();
    expect(i789Uv20196Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-6",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1120000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20196 preset when built for graphql`, () => {
    const i789Uv20196PresetGraphql =
      i789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-6",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1120000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
