import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20158 from './ii-789-uv-2015-8';

describe(`with ii789Uv20158 preset`, () => {
  it(`should return a ii789Uv20158 preset`, () => {
    const ii789Uv20158Preset = ii789Uv20158().build<TStandalonePriceDraft>();
    expect(ii789Uv20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ii789Uv20158 preset when built for graphql`, () => {
    const ii789Uv20158PresetGraphql =
      ii789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
