import type { TStandalonePriceDraft } from '../../../types';
import z890Op20198 from './z-890-op-2019-8';

describe(`with z890Op20198 preset`, () => {
  it(`should return a z890Op20198 preset`, () => {
    const z890Op20198Preset = z890Op20198().build<TStandalonePriceDraft>();
    expect(z890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-8",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
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

  it(`should return a z890Op20198 preset when built for graphql`, () => {
    const z890Op20198PresetGraphql =
      z890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-8",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
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
