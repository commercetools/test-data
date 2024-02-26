import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20196 from './ll-890-op-2019-6';

describe(`with ll890Op20196 preset`, () => {
  it(`should return a ll890Op20196 preset`, () => {
    const ll890Op20196Preset = ll890Op20196().build<TStandalonePriceDraft>();
    expect(ll890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-6",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20196 preset when built for graphql`, () => {
    const ll890Op20196PresetGraphql =
      ll890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-6",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
