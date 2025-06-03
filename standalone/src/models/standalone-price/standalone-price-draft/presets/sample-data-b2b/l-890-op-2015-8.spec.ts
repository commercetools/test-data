import type { TStandalonePriceDraft } from '../../../types';
import l890Op20158 from './l-890-op-2015-8';

describe(`with l890Op20158 preset`, () => {
  it(`should return a l890Op20158 preset`, () => {
    const l890Op20158Preset = l890Op20158().build<TStandalonePriceDraft>();
    expect(l890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20158 preset when built for graphql`, () => {
    const l890Op20158PresetGraphql =
      l890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-8",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
