import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20196 from './w-789-uv-2019-6';

describe(`with w789Uv20196 preset`, () => {
  it(`should return a w789Uv20196 preset`, () => {
    const w789Uv20196Preset = w789Uv20196().build<TStandalonePriceDraft>();
    expect(w789Uv20196Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2019-6",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20196 preset when built for graphql`, () => {
    const w789Uv20196PresetGraphql =
      w789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2019-6",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
