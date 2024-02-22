import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20237 from './cc-789-uv-2023-7';

describe(`with cc789Uv20237 preset`, () => {
  it(`should return a cc789Uv20237 preset`, () => {
    const cc789Uv20237Preset = cc789Uv20237().build<TStandalonePriceDraft>();
    expect(cc789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-7",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20237 preset when built for graphql`, () => {
    const cc789Uv20237PresetGraphql =
      cc789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-7",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
