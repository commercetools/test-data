import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20194 from './rr-890-op-2019-4';

describe(`with rr890Op20194 preset`, () => {
  it(`should return a rr890Op20194 preset`, () => {
    const rr890Op20194Preset = rr890Op20194().build<TStandalonePriceDraft>();
    expect(rr890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-4",
        "sku": "rr890-op-2019",
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

  it(`should return a rr890Op20194 preset when built for graphql`, () => {
    const rr890Op20194PresetGraphql =
      rr890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-4",
        "sku": "rr890-op-2019",
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
