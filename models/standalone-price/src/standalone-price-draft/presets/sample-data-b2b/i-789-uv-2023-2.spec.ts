import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20232 from './i-789-uv-2023-2';

describe(`with i789Uv20232 preset`, () => {
  it(`should return a i789Uv20232 preset`, () => {
    const i789Uv20232Preset = i789Uv20232().build<TStandalonePriceDraft>();
    expect(i789Uv20232Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2023-2",
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20232 preset when built for graphql`, () => {
    const i789Uv20232PresetGraphql =
      i789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2023-2",
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
