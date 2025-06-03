import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20155 from './ll-890-op-2015-5';

describe(`with ll890Op20155 preset`, () => {
  it(`should return a ll890Op20155 preset`, () => {
    const ll890Op20155Preset = ll890Op20155().build<TStandalonePriceDraft>();
    expect(ll890Op20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-5",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20155 preset when built for graphql`, () => {
    const ll890Op20155PresetGraphql =
      ll890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-5",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
