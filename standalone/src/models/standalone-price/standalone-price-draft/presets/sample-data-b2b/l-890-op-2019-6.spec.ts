import type { TStandalonePriceDraft } from '../../../types';
import l890Op20196 from './l-890-op-2019-6';

describe(`with l890Op20196 preset`, () => {
  it(`should return a l890Op20196 preset`, () => {
    const l890Op20196Preset = l890Op20196().build<TStandalonePriceDraft>();
    expect(l890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
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

  it(`should return a l890Op20196 preset when built for graphql`, () => {
    const l890Op20196PresetGraphql =
      l890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
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
