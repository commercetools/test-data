import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20194 from './i-789-uv-2019-4';

describe(`with i789Uv20194 preset`, () => {
  it(`should return a i789Uv20194 preset`, () => {
    const i789Uv20194Preset = i789Uv20194().build<TStandalonePriceDraft>();
    expect(i789Uv20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-4",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1400000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20194 preset when built for graphql`, () => {
    const i789Uv20194PresetGraphql =
      i789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-4",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1400000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
