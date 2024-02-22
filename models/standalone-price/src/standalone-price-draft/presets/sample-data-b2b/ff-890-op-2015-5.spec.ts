import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20155 from './ff-890-op-2015-5';

describe(`with ff890Op20155 preset`, () => {
  it(`should return a ff890Op20155 preset`, () => {
    const ff890Op20155Preset = ff890Op20155().build<TStandalonePriceDraft>();
    expect(ff890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2015-5",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20155 preset when built for graphql`, () => {
    const ff890Op20155PresetGraphql =
      ff890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2015-5",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
