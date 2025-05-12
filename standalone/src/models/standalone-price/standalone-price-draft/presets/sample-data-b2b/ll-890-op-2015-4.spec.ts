import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20154 from './ll-890-op-2015-4';

describe(`with ll890Op20154 preset`, () => {
  it(`should return a ll890Op20154 preset`, () => {
    const ll890Op20154Preset = ll890Op20154().build<TStandalonePriceDraft>();
    expect(ll890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-4",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20154 preset when built for graphql`, () => {
    const ll890Op20154PresetGraphql =
      ll890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-4",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
