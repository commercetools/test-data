import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20238 from './i-789-uv-2023-8';

describe(`with i789Uv20238 preset`, () => {
  it(`should return a i789Uv20238 preset`, () => {
    const i789Uv20238Preset = i789Uv20238().build<TStandalonePriceDraft>();
    expect(i789Uv20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-8",
        "sku": "i789-uv-2023",
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

  it(`should return a i789Uv20238 preset when built for graphql`, () => {
    const i789Uv20238PresetGraphql =
      i789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-8",
        "sku": "i789-uv-2023",
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
