import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20194 from './ii-789-uv-2019-4';

describe(`with ii789Uv20194 preset`, () => {
  it(`should return a ii789Uv20194 preset`, () => {
    const ii789Uv20194Preset = ii789Uv20194().build<TStandalonePriceDraft>();
    expect(ii789Uv20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-4",
        "sku": "ii789-uv-2019",
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

  it(`should return a ii789Uv20194 preset when built for graphql`, () => {
    const ii789Uv20194PresetGraphql =
      ii789Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-4",
        "sku": "ii789-uv-2019",
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
