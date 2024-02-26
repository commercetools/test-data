import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet2 from './piston-ring-set-2';

describe(`with pistonRingSet2 preset`, () => {
  it(`should return a pistonRingSet2 preset`, () => {
    const pistonRingSet2Preset =
      pistonRingSet2().build<TStandalonePriceDraft>();
    expect(pistonRingSet2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-2",
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 17500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pistonRingSet2 preset when built for graphql`, () => {
    const pistonRingSet2PresetGraphql =
      pistonRingSet2().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-2",
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 17500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
