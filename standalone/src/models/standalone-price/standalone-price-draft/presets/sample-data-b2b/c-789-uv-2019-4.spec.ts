import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20194 from './c-789-uv-2019-4';

describe(`with c789Uv20194 preset`, () => {
  it(`should return a c789Uv20194 preset`, () => {
    const c789Uv20194Preset = c789Uv20194().build<TStandalonePriceDraft>();
    expect(c789Uv20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-4",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a c789Uv20194 preset when built for graphql`, () => {
    const c789Uv20194PresetGraphql =
      c789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-4",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
