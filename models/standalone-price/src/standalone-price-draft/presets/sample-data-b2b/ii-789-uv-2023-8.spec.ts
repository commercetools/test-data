import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20238 from './ii-789-uv-2023-8';

describe(`with ii789Uv20238 preset`, () => {
  it(`should return a ii789Uv20238 preset`, () => {
    const ii789Uv20238Preset = ii789Uv20238().build<TStandalonePriceDraft>();
    expect(ii789Uv20238Preset).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2023-8",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ii789Uv20238 preset when built for graphql`, () => {
    const ii789Uv20238PresetGraphql =
      ii789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20238PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2023-8",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
