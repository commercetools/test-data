import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20237 from './c-789-uv-2023-7';

describe(`with c789Uv20237 preset`, () => {
  it(`should return a c789Uv20237 preset`, () => {
    const c789Uv20237Preset = c789Uv20237().build<TStandalonePriceDraft>();
    expect(c789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-7",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20237 preset when built for graphql`, () => {
    const c789Uv20237PresetGraphql =
      c789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-7",
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
