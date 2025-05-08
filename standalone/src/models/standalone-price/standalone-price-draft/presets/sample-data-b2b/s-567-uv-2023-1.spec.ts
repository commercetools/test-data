import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20231 from './s-567-uv-2023-1';

describe(`with s567Uv20231 preset`, () => {
  it(`should return a s567Uv20231 preset`, () => {
    const s567Uv20231Preset = s567Uv20231().build<TStandalonePriceDraft>();
    expect(s567Uv20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-1",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a s567Uv20231 preset when built for graphql`, () => {
    const s567Uv20231PresetGraphql =
      s567Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-1",
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
