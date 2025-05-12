import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20152 from './ll-890-op-2015-2';

describe(`with ll890Op20152 preset`, () => {
  it(`should return a ll890Op20152 preset`, () => {
    const ll890Op20152Preset = ll890Op20152().build<TStandalonePriceDraft>();
    expect(ll890Op20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-2",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3465000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20152 preset when built for graphql`, () => {
    const ll890Op20152PresetGraphql =
      ll890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-2",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3465000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
