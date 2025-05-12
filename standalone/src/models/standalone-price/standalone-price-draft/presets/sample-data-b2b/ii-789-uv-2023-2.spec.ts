import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20232 from './ii-789-uv-2023-2';

describe(`with ii789Uv20232 preset`, () => {
  it(`should return a ii789Uv20232 preset`, () => {
    const ii789Uv20232Preset = ii789Uv20232().build<TStandalonePriceDraft>();
    expect(ii789Uv20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-2",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20232 preset when built for graphql`, () => {
    const ii789Uv20232PresetGraphql =
      ii789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-2",
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
