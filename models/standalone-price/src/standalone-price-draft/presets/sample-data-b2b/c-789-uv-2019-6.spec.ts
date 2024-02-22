import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20196 from './c-789-uv-2019-6';

describe(`with c789Uv20196 preset`, () => {
  it(`should return a c789Uv20196 preset`, () => {
    const c789Uv20196Preset = c789Uv20196().build<TStandalonePriceDraft>();
    expect(c789Uv20196Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-6",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20196 preset when built for graphql`, () => {
    const c789Uv20196PresetGraphql =
      c789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-6",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
