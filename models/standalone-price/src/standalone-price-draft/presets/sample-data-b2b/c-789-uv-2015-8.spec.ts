import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20158 from './c-789-uv-2015-8';

describe(`with c789Uv20158 preset`, () => {
  it(`should return a c789Uv20158 preset`, () => {
    const c789Uv20158Preset = c789Uv20158().build<TStandalonePriceDraft>();
    expect(c789Uv20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-8",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20158 preset when built for graphql`, () => {
    const c789Uv20158PresetGraphql =
      c789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-8",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
