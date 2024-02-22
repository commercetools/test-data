import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20194 from './cc-789-uv-2019-4';

describe(`with cc789Uv20194 preset`, () => {
  it(`should return a cc789Uv20194 preset`, () => {
    const cc789Uv20194Preset = cc789Uv20194().build<TStandalonePriceDraft>();
    expect(cc789Uv20194Preset).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2019-4",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a cc789Uv20194 preset when built for graphql`, () => {
    const cc789Uv20194PresetGraphql =
      cc789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2019-4",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
