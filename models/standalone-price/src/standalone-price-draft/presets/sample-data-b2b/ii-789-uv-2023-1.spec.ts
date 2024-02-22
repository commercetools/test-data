import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20231 from './ii-789-uv-2023-1';

describe(`with ii789Uv20231 preset`, () => {
  it(`should return a ii789Uv20231 preset`, () => {
    const ii789Uv20231Preset = ii789Uv20231().build<TStandalonePriceDraft>();
    expect(ii789Uv20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-1",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ii789Uv20231 preset when built for graphql`, () => {
    const ii789Uv20231PresetGraphql =
      ii789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-1",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
