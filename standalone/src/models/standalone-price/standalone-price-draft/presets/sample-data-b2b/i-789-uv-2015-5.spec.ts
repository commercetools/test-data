import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20155 from './i-789-uv-2015-5';

describe(`with i789Uv20155 preset`, () => {
  it(`should return a i789Uv20155 preset`, () => {
    const i789Uv20155Preset = i789Uv20155().build<TStandalonePriceDraft>();
    expect(i789Uv20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-5",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1260000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20155 preset when built for graphql`, () => {
    const i789Uv20155PresetGraphql =
      i789Uv20155().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-5",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1260000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
