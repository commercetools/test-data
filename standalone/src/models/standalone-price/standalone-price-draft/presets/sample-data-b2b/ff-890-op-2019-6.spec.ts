import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20196 from './ff-890-op-2019-6';

describe(`with ff890Op20196 preset`, () => {
  it(`should return a ff890Op20196 preset`, () => {
    const ff890Op20196Preset = ff890Op20196().build<TStandalonePriceDraft>();
    expect(ff890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-6",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20196 preset when built for graphql`, () => {
    const ff890Op20196PresetGraphql =
      ff890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-6",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
