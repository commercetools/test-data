import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20238 from './ll-890-op-2023-8';

describe(`with ll890Op20238 preset`, () => {
  it(`should return a ll890Op20238 preset`, () => {
    const ll890Op20238Preset = ll890Op20238().build<TStandalonePriceDraft>();
    expect(ll890Op20238Preset).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2023-8",
        "sku": "ll890-op-2023",
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

  it(`should return a ll890Op20238 preset when built for graphql`, () => {
    const ll890Op20238PresetGraphql =
      ll890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20238PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2023-8",
        "sku": "ll890-op-2023",
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
