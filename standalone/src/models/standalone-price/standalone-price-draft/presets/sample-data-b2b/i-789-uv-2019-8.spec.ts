import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20198 from './i-789-uv-2019-8';

describe(`with i789Uv20198 preset`, () => {
  it(`should return a i789Uv20198 preset`, () => {
    const i789Uv20198Preset = i789Uv20198().build<TStandalonePriceDraft>();
    expect(i789Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-8",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20198 preset when built for graphql`, () => {
    const i789Uv20198PresetGraphql =
      i789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-8",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
