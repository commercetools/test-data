import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20198 from './ll-890-op-2019-8';

describe(`with ll890Op20198 preset`, () => {
  it(`should return a ll890Op20198 preset`, () => {
    const ll890Op20198Preset = ll890Op20198().build<TStandalonePriceDraft>();
    expect(ll890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-8",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20198 preset when built for graphql`, () => {
    const ll890Op20198PresetGraphql =
      ll890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-8",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
