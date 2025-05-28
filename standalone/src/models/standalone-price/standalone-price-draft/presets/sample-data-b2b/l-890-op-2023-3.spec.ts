import type { TStandalonePriceDraft } from '../../../types';
import l890Op20233 from './l-890-op-2023-3';

describe(`with l890Op20233 preset`, () => {
  it(`should return a l890Op20233 preset`, () => {
    const l890Op20233Preset = l890Op20233().build<TStandalonePriceDraft>();
    expect(l890Op20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-3",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2310000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20233 preset when built for graphql`, () => {
    const l890Op20233PresetGraphql =
      l890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-3",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2310000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
