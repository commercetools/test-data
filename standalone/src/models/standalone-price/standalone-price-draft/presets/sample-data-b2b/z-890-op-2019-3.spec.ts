import type { TStandalonePriceDraft } from '../../../types';
import z890Op20193 from './z-890-op-2019-3';

describe(`with z890Op20193 preset`, () => {
  it(`should return a z890Op20193 preset`, () => {
    const z890Op20193Preset = z890Op20193().build<TStandalonePriceDraft>();
    expect(z890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-3",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3861000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20193 preset when built for graphql`, () => {
    const z890Op20193PresetGraphql =
      z890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-3",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3861000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
