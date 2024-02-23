import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20193 from './i-789-uv-2019-3';

describe(`with i789Uv20193 preset`, () => {
  it(`should return a i789Uv20193 preset`, () => {
    const i789Uv20193Preset = i789Uv20193().build<TStandalonePriceDraft>();
    expect(i789Uv20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-3",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2002000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20193 preset when built for graphql`, () => {
    const i789Uv20193PresetGraphql =
      i789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-3",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2002000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
