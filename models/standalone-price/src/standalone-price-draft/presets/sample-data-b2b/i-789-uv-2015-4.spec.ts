import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20154 from './i-789-uv-2015-4';

describe(`with i789Uv20154 preset`, () => {
  it(`should return a i789Uv20154 preset`, () => {
    const i789Uv20154Preset = i789Uv20154().build<TStandalonePriceDraft>();
    expect(i789Uv20154Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2015-4",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1400000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20154 preset when built for graphql`, () => {
    const i789Uv20154PresetGraphql =
      i789Uv20154().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2015-4",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1400000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
