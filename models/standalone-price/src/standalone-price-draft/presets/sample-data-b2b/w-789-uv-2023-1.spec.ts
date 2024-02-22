import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20231 from './w-789-uv-2023-1';

describe(`with w789Uv20231 preset`, () => {
  it(`should return a w789Uv20231 preset`, () => {
    const w789Uv20231Preset = w789Uv20231().build<TStandalonePriceDraft>();
    expect(w789Uv20231Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-1",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20231 preset when built for graphql`, () => {
    const w789Uv20231PresetGraphql =
      w789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-1",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
