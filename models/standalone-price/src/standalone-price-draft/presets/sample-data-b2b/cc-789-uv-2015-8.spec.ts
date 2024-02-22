import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20158 from './cc-789-uv-2015-8';

describe(`with cc789Uv20158 preset`, () => {
  it(`should return a cc789Uv20158 preset`, () => {
    const cc789Uv20158Preset = cc789Uv20158().build<TStandalonePriceDraft>();
    expect(cc789Uv20158Preset).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2015-8",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20158 preset when built for graphql`, () => {
    const cc789Uv20158PresetGraphql =
      cc789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20158PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2015-8",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
