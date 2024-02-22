import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20237 from './rr-890-op-2023-7';

describe(`with rr890Op20237 preset`, () => {
  it(`should return a rr890Op20237 preset`, () => {
    const rr890Op20237Preset = rr890Op20237().build<TStandalonePriceDraft>();
    expect(rr890Op20237Preset).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2023-7",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20237 preset when built for graphql`, () => {
    const rr890Op20237PresetGraphql =
      rr890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2023-7",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
