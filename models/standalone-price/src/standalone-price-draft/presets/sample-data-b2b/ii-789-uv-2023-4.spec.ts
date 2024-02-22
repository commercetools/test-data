import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20234 from './ii-789-uv-2023-4';

describe(`with ii789Uv20234 preset`, () => {
  it(`should return a ii789Uv20234 preset`, () => {
    const ii789Uv20234Preset = ii789Uv20234().build<TStandalonePriceDraft>();
    expect(ii789Uv20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-4",
        "sku": "ii789-uv-2023",
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

  it(`should return a ii789Uv20234 preset when built for graphql`, () => {
    const ii789Uv20234PresetGraphql =
      ii789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-4",
        "sku": "ii789-uv-2023",
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
