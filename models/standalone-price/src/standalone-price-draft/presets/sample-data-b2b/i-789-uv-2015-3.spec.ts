import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20153 from './i-789-uv-2015-3';

describe(`with i789Uv20153 preset`, () => {
  it(`should return a i789Uv20153 preset`, () => {
    const i789Uv20153Preset = i789Uv20153().build<TStandalonePriceDraft>();
    expect(i789Uv20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-3",
        "sku": "i789-uv-2015",
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

  it(`should return a i789Uv20153 preset when built for graphql`, () => {
    const i789Uv20153PresetGraphql =
      i789Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-3",
        "sku": "i789-uv-2015",
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
