import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20198 from './ii-789-uv-2019-8';

describe(`with ii789Uv20198 preset`, () => {
  it(`should return a ii789Uv20198 preset`, () => {
    const ii789Uv20198Preset = ii789Uv20198().build<TStandalonePriceDraft>();
    expect(ii789Uv20198Preset).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-8",
        "sku": "ii789-uv-2019",
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

  it(`should return a ii789Uv20198 preset when built for graphql`, () => {
    const ii789Uv20198PresetGraphql =
      ii789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20198PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-8",
        "sku": "ii789-uv-2019",
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
