import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20195 from './i-789-uv-2019-5';

describe(`with i789Uv20195 preset`, () => {
  it(`should return a i789Uv20195 preset`, () => {
    const i789Uv20195Preset = i789Uv20195().build<TStandalonePriceDraft>();
    expect(i789Uv20195Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-5",
        "sku": "i789-uv-2019",
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

  it(`should return a i789Uv20195 preset when built for graphql`, () => {
    const i789Uv20195PresetGraphql =
      i789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-5",
        "sku": "i789-uv-2019",
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
