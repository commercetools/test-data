import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20195 from './ll-890-op-2019-5';

describe(`with ll890Op20195 preset`, () => {
  it(`should return a ll890Op20195 preset`, () => {
    const ll890Op20195Preset = ll890Op20195().build<TStandalonePriceDraft>();
    expect(ll890Op20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-5",
        "sku": "ll890-op-2019",
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

  it(`should return a ll890Op20195 preset when built for graphql`, () => {
    const ll890Op20195PresetGraphql =
      ll890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-5",
        "sku": "ll890-op-2019",
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
