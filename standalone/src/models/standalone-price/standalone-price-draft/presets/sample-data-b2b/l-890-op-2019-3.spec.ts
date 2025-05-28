import type { TStandalonePriceDraft } from '../../../types';
import l890Op20193 from './l-890-op-2019-3';

describe(`with l890Op20193 preset`, () => {
  it(`should return a l890Op20193 preset`, () => {
    const l890Op20193Preset = l890Op20193().build<TStandalonePriceDraft>();
    expect(l890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-3",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2145000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20193 preset when built for graphql`, () => {
    const l890Op20193PresetGraphql =
      l890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-3",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2145000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
