import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20158 from './ll-890-op-2015-8';

describe(`with ll890Op20158 preset`, () => {
  it(`should return a ll890Op20158 preset`, () => {
    const ll890Op20158Preset = ll890Op20158().build<TStandalonePriceDraft>();
    expect(ll890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20158 preset when built for graphql`, () => {
    const ll890Op20158PresetGraphql =
      ll890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
