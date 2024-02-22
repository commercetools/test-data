import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20236 from './w-789-uv-2023-6';

describe(`with w789Uv20236 preset`, () => {
  it(`should return a w789Uv20236 preset`, () => {
    const w789Uv20236Preset = w789Uv20236().build<TStandalonePriceDraft>();
    expect(w789Uv20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-6",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20236 preset when built for graphql`, () => {
    const w789Uv20236PresetGraphql =
      w789Uv20236().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-6",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
