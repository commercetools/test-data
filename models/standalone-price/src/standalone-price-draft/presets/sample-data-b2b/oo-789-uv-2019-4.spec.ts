import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20194 from './oo-789-uv-2019-4';

describe(`with oo789Uv20194 preset`, () => {
  it(`should return a oo789Uv20194 preset`, () => {
    const oo789Uv20194Preset = oo789Uv20194().build<TStandalonePriceDraft>();
    expect(oo789Uv20194Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-4",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oo789Uv20194 preset when built for graphql`, () => {
    const oo789Uv20194PresetGraphql =
      oo789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-4",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
