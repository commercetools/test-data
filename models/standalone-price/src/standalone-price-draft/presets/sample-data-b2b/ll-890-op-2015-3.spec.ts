import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20153 from './ll-890-op-2015-3';

describe(`with ll890Op20153 preset`, () => {
  it(`should return a ll890Op20153 preset`, () => {
    const ll890Op20153Preset = ll890Op20153().build<TStandalonePriceDraft>();
    expect(ll890Op20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-3",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20153 preset when built for graphql`, () => {
    const ll890Op20153PresetGraphql =
      ll890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-3",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
