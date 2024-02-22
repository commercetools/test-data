import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20233 from './w-789-uv-2023-3';

describe(`with w789Uv20233 preset`, () => {
  it(`should return a w789Uv20233 preset`, () => {
    const w789Uv20233Preset = w789Uv20233().build<TStandalonePriceDraft>();
    expect(w789Uv20233Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-3",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20233 preset when built for graphql`, () => {
    const w789Uv20233PresetGraphql =
      w789Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-3",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
