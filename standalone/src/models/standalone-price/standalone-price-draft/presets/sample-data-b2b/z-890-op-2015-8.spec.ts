import type { TStandalonePriceDraft } from '../../../types';
import z890Op20158 from './z-890-op-2015-8';

describe(`with z890Op20158 preset`, () => {
  it(`should return a z890Op20158 preset`, () => {
    const z890Op20158Preset = z890Op20158().build<TStandalonePriceDraft>();
    expect(z890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20158 preset when built for graphql`, () => {
    const z890Op20158PresetGraphql =
      z890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
