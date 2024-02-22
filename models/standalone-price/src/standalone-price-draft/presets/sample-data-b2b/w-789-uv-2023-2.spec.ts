import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20232 from './w-789-uv-2023-2';

describe(`with w789Uv20232 preset`, () => {
  it(`should return a w789Uv20232 preset`, () => {
    const w789Uv20232Preset = w789Uv20232().build<TStandalonePriceDraft>();
    expect(w789Uv20232Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-2",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20232 preset when built for graphql`, () => {
    const w789Uv20232PresetGraphql =
      w789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2023-2",
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
