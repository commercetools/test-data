import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20233 from './c-789-uv-2023-3';

describe(`with c789Uv20233 preset`, () => {
  it(`should return a c789Uv20233 preset`, () => {
    const c789Uv20233Preset = c789Uv20233().build<TStandalonePriceDraft>();
    expect(c789Uv20233Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2023-3",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1848000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20233 preset when built for graphql`, () => {
    const c789Uv20233PresetGraphql =
      c789Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2023-3",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1848000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
