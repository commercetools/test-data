import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20157 from './i-789-uv-2015-7';

describe(`with i789Uv20157 preset`, () => {
  it(`should return a i789Uv20157 preset`, () => {
    const i789Uv20157Preset = i789Uv20157().build<TStandalonePriceDraft>();
    expect(i789Uv20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-7",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1680000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20157 preset when built for graphql`, () => {
    const i789Uv20157PresetGraphql =
      i789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-7",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1680000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
