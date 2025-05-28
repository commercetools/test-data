import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20237 from './i-789-uv-2023-7';

describe(`with i789Uv20237 preset`, () => {
  it(`should return a i789Uv20237 preset`, () => {
    const i789Uv20237Preset = i789Uv20237().build<TStandalonePriceDraft>();
    expect(i789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1680000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20237 preset when built for graphql`, () => {
    const i789Uv20237PresetGraphql =
      i789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1680000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
