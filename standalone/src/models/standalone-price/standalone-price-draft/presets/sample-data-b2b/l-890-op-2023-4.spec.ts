import type { TStandalonePriceDraft } from '../../../types';
import l890Op20234 from './l-890-op-2023-4';

describe(`with l890Op20234 preset`, () => {
  it(`should return a l890Op20234 preset`, () => {
    const l890Op20234Preset = l890Op20234().build<TStandalonePriceDraft>();
    expect(l890Op20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a l890Op20234 preset when built for graphql`, () => {
    const l890Op20234PresetGraphql =
      l890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
