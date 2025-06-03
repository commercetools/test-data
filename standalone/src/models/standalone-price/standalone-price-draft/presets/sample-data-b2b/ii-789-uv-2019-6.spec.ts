import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20196 from './ii-789-uv-2019-6';

describe(`with ii789Uv20196 preset`, () => {
  it(`should return a ii789Uv20196 preset`, () => {
    const ii789Uv20196Preset = ii789Uv20196().build<TStandalonePriceDraft>();
    expect(ii789Uv20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-6",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20196 preset when built for graphql`, () => {
    const ii789Uv20196PresetGraphql =
      ii789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-6",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
