import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet4 from './piston-ring-set-4';

describe(`with pistonRingSet4 preset`, () => {
  it(`should return a pistonRingSet4 preset`, () => {
    const pistonRingSet4Preset =
      pistonRingSet4().build<TStandalonePriceDraft>();
    expect(pistonRingSet4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-4",
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

  it(`should return a pistonRingSet4 preset when built for graphql`, () => {
    const pistonRingSet4PresetGraphql =
      pistonRingSet4().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-4",
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
