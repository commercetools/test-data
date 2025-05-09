import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20151 from './ii-789-uv-2015-1';

describe(`with ii789Uv20151 preset`, () => {
  it(`should return a ii789Uv20151 preset`, () => {
    const ii789Uv20151Preset = ii789Uv20151().build<TStandalonePriceDraft>();
    expect(ii789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-1",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ii789Uv20151 preset when built for graphql`, () => {
    const ii789Uv20151PresetGraphql =
      ii789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-1",
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
