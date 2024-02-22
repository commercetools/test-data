import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20157 from './c-789-uv-2015-7';

describe(`with c789Uv20157 preset`, () => {
  it(`should return a c789Uv20157 preset`, () => {
    const c789Uv20157Preset = c789Uv20157().build<TStandalonePriceDraft>();
    expect(c789Uv20157Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2015-7",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20157 preset when built for graphql`, () => {
    const c789Uv20157PresetGraphql =
      c789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20157PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2015-7",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
