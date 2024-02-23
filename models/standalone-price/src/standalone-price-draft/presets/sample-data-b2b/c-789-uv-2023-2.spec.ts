import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20232 from './c-789-uv-2023-2';

describe(`with c789Uv20232 preset`, () => {
  it(`should return a c789Uv20232 preset`, () => {
    const c789Uv20232Preset = c789Uv20232().build<TStandalonePriceDraft>();
    expect(c789Uv20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-2",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20232 preset when built for graphql`, () => {
    const c789Uv20232PresetGraphql =
      c789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-2",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
