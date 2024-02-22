import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20195 from './rr-890-op-2019-5';

describe(`with rr890Op20195 preset`, () => {
  it(`should return a rr890Op20195 preset`, () => {
    const rr890Op20195Preset = rr890Op20195().build<TStandalonePriceDraft>();
    expect(rr890Op20195Preset).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2019-5",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20195 preset when built for graphql`, () => {
    const rr890Op20195PresetGraphql =
      rr890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2019-5",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
