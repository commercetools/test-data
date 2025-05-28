import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20237 from './ii-789-uv-2023-7';

describe(`with ii789Uv20237 preset`, () => {
  it(`should return a ii789Uv20237 preset`, () => {
    const ii789Uv20237Preset = ii789Uv20237().build<TStandalonePriceDraft>();
    expect(ii789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ii789Uv20237 preset when built for graphql`, () => {
    const ii789Uv20237PresetGraphql =
      ii789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
