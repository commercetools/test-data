import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20152 from './rr-890-op-2015-2';

describe(`with rr890Op20152 preset`, () => {
  it(`should return a rr890Op20152 preset`, () => {
    const rr890Op20152Preset = rr890Op20152().build<TStandalonePriceDraft>();
    expect(rr890Op20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-2",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20152 preset when built for graphql`, () => {
    const rr890Op20152PresetGraphql =
      rr890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-2",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
