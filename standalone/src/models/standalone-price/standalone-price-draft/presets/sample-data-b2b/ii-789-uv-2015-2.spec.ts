import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20152 from './ii-789-uv-2015-2';

describe(`with ii789Uv20152 preset`, () => {
  it(`should return a ii789Uv20152 preset`, () => {
    const ii789Uv20152Preset = ii789Uv20152().build<TStandalonePriceDraft>();
    expect(ii789Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20152 preset when built for graphql`, () => {
    const ii789Uv20152PresetGraphql =
      ii789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
