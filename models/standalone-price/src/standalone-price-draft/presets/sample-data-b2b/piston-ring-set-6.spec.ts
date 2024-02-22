import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet6 from './piston-ring-set-6';

describe(`with pistonRingSet6 preset`, () => {
  it(`should return a pistonRingSet6 preset`, () => {
    const pistonRingSet6Preset =
      pistonRingSet6().build<TStandalonePriceDraft>();
    expect(pistonRingSet6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-6",
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

  it(`should return a pistonRingSet6 preset when built for graphql`, () => {
    const pistonRingSet6PresetGraphql =
      pistonRingSet6().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-6",
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
