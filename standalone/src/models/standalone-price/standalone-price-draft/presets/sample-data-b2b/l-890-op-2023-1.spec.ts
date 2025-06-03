import type { TStandalonePriceDraft } from '../../../types';
import l890Op20231 from './l-890-op-2023-1';

describe(`with l890Op20231 preset`, () => {
  it(`should return a l890Op20231 preset`, () => {
    const l890Op20231Preset = l890Op20231().build<TStandalonePriceDraft>();
    expect(l890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a l890Op20231 preset when built for graphql`, () => {
    const l890Op20231PresetGraphql =
      l890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
