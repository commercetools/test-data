import type { TStandalonePriceDraft } from '../../../types';
import l890Op20154 from './l-890-op-2015-4';

describe(`with l890Op20154 preset`, () => {
  it(`should return a l890Op20154 preset`, () => {
    const l890Op20154Preset = l890Op20154().build<TStandalonePriceDraft>();
    expect(l890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-4",
        "sku": "l890-op-2015",
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

  it(`should return a l890Op20154 preset when built for graphql`, () => {
    const l890Op20154PresetGraphql =
      l890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-4",
        "sku": "l890-op-2015",
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
