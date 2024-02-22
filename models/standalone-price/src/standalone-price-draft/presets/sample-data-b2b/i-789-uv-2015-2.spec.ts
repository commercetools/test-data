import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20152 from './i-789-uv-2015-2';

describe(`with i789Uv20152 preset`, () => {
  it(`should return a i789Uv20152 preset`, () => {
    const i789Uv20152Preset = i789Uv20152().build<TStandalonePriceDraft>();
    expect(i789Uv20152Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2015-2",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1386000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20152 preset when built for graphql`, () => {
    const i789Uv20152PresetGraphql =
      i789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2015-2",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1386000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
