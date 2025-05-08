import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20157 from './ii-789-uv-2015-7';

describe(`with ii789Uv20157 preset`, () => {
  it(`should return a ii789Uv20157 preset`, () => {
    const ii789Uv20157Preset = ii789Uv20157().build<TStandalonePriceDraft>();
    expect(ii789Uv20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-7",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ii789Uv20157 preset when built for graphql`, () => {
    const ii789Uv20157PresetGraphql =
      ii789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-7",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
