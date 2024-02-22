import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20193 from './ii-789-uv-2019-3';

describe(`with ii789Uv20193 preset`, () => {
  it(`should return a ii789Uv20193 preset`, () => {
    const ii789Uv20193Preset = ii789Uv20193().build<TStandalonePriceDraft>();
    expect(ii789Uv20193Preset).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-3",
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ii789Uv20193 preset when built for graphql`, () => {
    const ii789Uv20193PresetGraphql =
      ii789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ii789-uv-2019-3",
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
