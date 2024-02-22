import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20196 from './rr-890-op-2019-6';

describe(`with rr890Op20196 preset`, () => {
  it(`should return a rr890Op20196 preset`, () => {
    const rr890Op20196Preset = rr890Op20196().build<TStandalonePriceDraft>();
    expect(rr890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-6",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20196 preset when built for graphql`, () => {
    const rr890Op20196PresetGraphql =
      rr890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-6",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
