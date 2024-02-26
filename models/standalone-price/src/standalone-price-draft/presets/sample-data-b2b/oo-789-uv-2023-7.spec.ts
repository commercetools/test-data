import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20237 from './oo-789-uv-2023-7';

describe(`with oo789Uv20237 preset`, () => {
  it(`should return a oo789Uv20237 preset`, () => {
    const oo789Uv20237Preset = oo789Uv20237().build<TStandalonePriceDraft>();
    expect(oo789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-7",
        "sku": "oo789-uv-2023",
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

  it(`should return a oo789Uv20237 preset when built for graphql`, () => {
    const oo789Uv20237PresetGraphql =
      oo789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-7",
        "sku": "oo789-uv-2023",
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
