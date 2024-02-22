import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20234 from './cc-789-uv-2023-4';

describe(`with cc789Uv20234 preset`, () => {
  it(`should return a cc789Uv20234 preset`, () => {
    const cc789Uv20234Preset = cc789Uv20234().build<TStandalonePriceDraft>();
    expect(cc789Uv20234Preset).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2023-4",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a cc789Uv20234 preset when built for graphql`, () => {
    const cc789Uv20234PresetGraphql =
      cc789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2023-4",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
