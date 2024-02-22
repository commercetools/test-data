import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20231 from './oo-789-uv-2023-1';

describe(`with oo789Uv20231 preset`, () => {
  it(`should return a oo789Uv20231 preset`, () => {
    const oo789Uv20231Preset = oo789Uv20231().build<TStandalonePriceDraft>();
    expect(oo789Uv20231Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2023-1",
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oo789Uv20231 preset when built for graphql`, () => {
    const oo789Uv20231PresetGraphql =
      oo789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2023-1",
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
