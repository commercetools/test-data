import type { TStandalonePriceDraft } from '../../../types';
import h456St20158 from './h-456-st-2015-8';

describe(`with h456St20158 preset`, () => {
  it(`should return a h456St20158 preset`, () => {
    const h456St20158Preset = h456St20158().build<TStandalonePriceDraft>();
    expect(h456St20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-8",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20158 preset when built for graphql`, () => {
    const h456St20158PresetGraphql =
      h456St20158().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-8",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
