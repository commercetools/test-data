import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20231 from './c-789-uv-2023-1';

describe(`with c789Uv20231 preset`, () => {
  it(`should return a c789Uv20231 preset`, () => {
    const c789Uv20231Preset = c789Uv20231().build<TStandalonePriceDraft>();
    expect(c789Uv20231Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2023-1",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a c789Uv20231 preset when built for graphql`, () => {
    const c789Uv20231PresetGraphql =
      c789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2023-1",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
