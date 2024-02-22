import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20154 from './rr-890-op-2015-4';

describe(`with rr890Op20154 preset`, () => {
  it(`should return a rr890Op20154 preset`, () => {
    const rr890Op20154Preset = rr890Op20154().build<TStandalonePriceDraft>();
    expect(rr890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-4",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a rr890Op20154 preset when built for graphql`, () => {
    const rr890Op20154PresetGraphql =
      rr890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-4",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
