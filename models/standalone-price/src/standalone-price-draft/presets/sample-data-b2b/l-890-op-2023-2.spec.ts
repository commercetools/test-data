import type { TStandalonePriceDraft } from '../../../types';
import l890Op20232 from './l-890-op-2023-2';

describe(`with l890Op20232 preset`, () => {
  it(`should return a l890Op20232 preset`, () => {
    const l890Op20232Preset = l890Op20232().build<TStandalonePriceDraft>();
    expect(l890Op20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-2",
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1815001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a l890Op20232 preset when built for graphql`, () => {
    const l890Op20232PresetGraphql =
      l890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-2",
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1815001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
