import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20194 from './w-789-uv-2019-4';

describe(`with w789Uv20194 preset`, () => {
  it(`should return a w789Uv20194 preset`, () => {
    const w789Uv20194Preset = w789Uv20194().build<TStandalonePriceDraft>();
    expect(w789Uv20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-4",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20194 preset when built for graphql`, () => {
    const w789Uv20194PresetGraphql =
      w789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-4",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
