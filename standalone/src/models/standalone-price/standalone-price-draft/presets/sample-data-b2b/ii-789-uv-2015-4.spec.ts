import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20154 from './ii-789-uv-2015-4';

describe(`with ii789Uv20154 preset`, () => {
  it(`should return a ii789Uv20154 preset`, () => {
    const ii789Uv20154Preset = ii789Uv20154().build<TStandalonePriceDraft>();
    expect(ii789Uv20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-4",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ii789Uv20154 preset when built for graphql`, () => {
    const ii789Uv20154PresetGraphql =
      ii789Uv20154().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-4",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
