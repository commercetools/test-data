import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20195 from './c-789-uv-2019-5';

describe(`with c789Uv20195 preset`, () => {
  it(`should return a c789Uv20195 preset`, () => {
    const c789Uv20195Preset = c789Uv20195().build<TStandalonePriceDraft>();
    expect(c789Uv20195Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-5",
        "sku": "c789-uv-2019",
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

  it(`should return a c789Uv20195 preset when built for graphql`, () => {
    const c789Uv20195PresetGraphql =
      c789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-5",
        "sku": "c789-uv-2019",
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
