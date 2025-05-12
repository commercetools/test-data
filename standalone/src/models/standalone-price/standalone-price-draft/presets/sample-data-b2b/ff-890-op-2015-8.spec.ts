import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20158 from './ff-890-op-2015-8';

describe(`with ff890Op20158 preset`, () => {
  it(`should return a ff890Op20158 preset`, () => {
    const ff890Op20158Preset = ff890Op20158().build<TStandalonePriceDraft>();
    expect(ff890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-8",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ff890Op20158 preset when built for graphql`, () => {
    const ff890Op20158PresetGraphql =
      ff890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-8",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
