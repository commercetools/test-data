import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet7 from './piston-ring-set-7';

describe(`with pistonRingSet7 preset`, () => {
  it(`should return a pistonRingSet7 preset`, () => {
    const pistonRingSet7Preset =
      pistonRingSet7().build<TStandalonePriceDraft>();
    expect(pistonRingSet7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-7",
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

  it(`should return a pistonRingSet7 preset when built for graphql`, () => {
    const pistonRingSet7PresetGraphql =
      pistonRingSet7().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-7",
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
