import type { TStandalonePriceDraft } from '../../../types';
import h456St20237 from './h-456-st-2023-7';

describe(`with h456St20237 preset`, () => {
  it(`should return a h456St20237 preset`, () => {
    const h456St20237Preset = h456St20237().build<TStandalonePriceDraft>();
    expect(h456St20237Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-7",
        "sku": "h456-st-2023",
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

  it(`should return a h456St20237 preset when built for graphql`, () => {
    const h456St20237PresetGraphql =
      h456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-7",
        "sku": "h456-st-2023",
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
