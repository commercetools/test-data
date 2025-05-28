import type { TStandalonePriceDraft } from '../../../types';
import l890Op20236 from './l-890-op-2023-6';

describe(`with l890Op20236 preset`, () => {
  it(`should return a l890Op20236 preset`, () => {
    const l890Op20236Preset = l890Op20236().build<TStandalonePriceDraft>();
    expect(l890Op20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a l890Op20236 preset when built for graphql`, () => {
    const l890Op20236PresetGraphql =
      l890Op20236().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
