import type { TStandalonePriceDraft } from '../../../types';
import pistonRingSet5 from './piston-ring-set-5';

describe(`with pistonRingSet5 preset`, () => {
  it(`should return a pistonRingSet5 preset`, () => {
    const pistonRingSet5Preset =
      pistonRingSet5().build<TStandalonePriceDraft>();
    expect(pistonRingSet5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-5",
        "recurrencePolicy": undefined,
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

  it(`should return a pistonRingSet5 preset when built for graphql`, () => {
    const pistonRingSet5PresetGraphql =
      pistonRingSet5().buildGraphql<TStandalonePriceDraft>();
    expect(pistonRingSet5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "piston-ring-set-5",
        "recurrencePolicy": undefined,
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
