import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20236 from './ii-789-uv-2023-6';

describe(`with ii789Uv20236 preset`, () => {
  it(`should return a ii789Uv20236 preset`, () => {
    const ii789Uv20236Preset = ii789Uv20236().build<TStandalonePriceDraft>();
    expect(ii789Uv20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-6",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20236 preset when built for graphql`, () => {
    const ii789Uv20236PresetGraphql =
      ii789Uv20236().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-6",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
