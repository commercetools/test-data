import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20151 from './ll-890-op-2015-1';

describe(`with ll890Op20151 preset`, () => {
  it(`should return a ll890Op20151 preset`, () => {
    const ll890Op20151Preset = ll890Op20151().build<TStandalonePriceDraft>();
    expect(ll890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-1",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20151 preset when built for graphql`, () => {
    const ll890Op20151PresetGraphql =
      ll890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-1",
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
