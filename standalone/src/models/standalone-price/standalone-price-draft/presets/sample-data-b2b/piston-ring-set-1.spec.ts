import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet1 from './piston-ring-set-1';

describe(`with pistonRingSet1 preset`, () => {
  it(`should return a pistonRingSet1 preset`, () => {
    const pistonRingSet1Preset =
      pistonRingSet1().build<TStandalonePriceDraft>();
    expect(pistonRingSet1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-1",
        "recurrencePolicy": undefined,
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 17500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pistonRingSet1 preset when built for graphql`, () => {
    const pistonRingSet1PresetGraphql =
      pistonRingSet1().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-1",
        "recurrencePolicy": undefined,
        "sku": "piston-ring-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 17500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
