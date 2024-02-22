import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20155 from './w-789-uv-2015-5';

describe(`with w789Uv20155 preset`, () => {
  it(`should return a w789Uv20155 preset`, () => {
    const w789Uv20155Preset = w789Uv20155().build<TStandalonePriceDraft>();
    expect(w789Uv20155Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2015-5",
        "sku": "w789-uv-2015",
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

  it(`should return a w789Uv20155 preset when built for graphql`, () => {
    const w789Uv20155PresetGraphql =
      w789Uv20155().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2015-5",
        "sku": "w789-uv-2015",
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
