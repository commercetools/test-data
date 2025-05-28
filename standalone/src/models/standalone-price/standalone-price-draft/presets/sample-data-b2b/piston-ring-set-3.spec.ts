import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet3 from './piston-ring-set-3';

describe(`with pistonRingSet3 preset`, () => {
  it(`should return a pistonRingSet3 preset`, () => {
    const pistonRingSet3Preset =
      pistonRingSet3().build<TStandalonePriceDraft>();
    expect(pistonRingSet3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-3",
        "recurrencePolicy": undefined,
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 17500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pistonRingSet3 preset when built for graphql`, () => {
    const pistonRingSet3PresetGraphql =
      pistonRingSet3().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-3",
        "recurrencePolicy": undefined,
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 17500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
