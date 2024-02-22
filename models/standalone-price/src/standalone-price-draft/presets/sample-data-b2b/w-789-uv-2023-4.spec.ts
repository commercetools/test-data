import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20234 from './w-789-uv-2023-4';

describe(`with w789Uv20234 preset`, () => {
  it(`should return a w789Uv20234 preset`, () => {
    const w789Uv20234Preset = w789Uv20234().build<TStandalonePriceDraft>();
    expect(w789Uv20234Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-4",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20234 preset when built for graphql`, () => {
    const w789Uv20234PresetGraphql =
      w789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-4",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
