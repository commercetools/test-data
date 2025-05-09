import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet8 from './piston-ring-set-8';

describe(`with pistonRingSet8 preset`, () => {
  it(`should return a pistonRingSet8 preset`, () => {
    const pistonRingSet8Preset =
      pistonRingSet8().build<TStandalonePriceDraft>();
    expect(pistonRingSet8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-8",
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

  it(`should return a pistonRingSet8 preset when built for graphql`, () => {
    const pistonRingSet8PresetGraphql =
      pistonRingSet8().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-8",
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
