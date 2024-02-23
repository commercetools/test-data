import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20198 from './ff-890-op-2019-8';

describe(`with ff890Op20198 preset`, () => {
  it(`should return a ff890Op20198 preset`, () => {
    const ff890Op20198Preset = ff890Op20198().build<TStandalonePriceDraft>();
    expect(ff890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-8",
        "sku": "ff890-op-2019",
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

  it(`should return a ff890Op20198 preset when built for graphql`, () => {
    const ff890Op20198PresetGraphql =
      ff890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-8",
        "sku": "ff890-op-2019",
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
