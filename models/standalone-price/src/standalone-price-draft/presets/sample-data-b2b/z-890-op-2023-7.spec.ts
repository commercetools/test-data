import type { TStandalonePriceDraft } from '../../../types';
import z890Op20237 from './z-890-op-2023-7';

describe(`with z890Op20237 preset`, () => {
  it(`should return a z890Op20237 preset`, () => {
    const z890Op20237Preset = z890Op20237().build<TStandalonePriceDraft>();
    expect(z890Op20237Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-7",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3240000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20237 preset when built for graphql`, () => {
    const z890Op20237PresetGraphql =
      z890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-7",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3240000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
