import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20153 from './ff-890-op-2015-3';

describe(`with ff890Op20153 preset`, () => {
  it(`should return a ff890Op20153 preset`, () => {
    const ff890Op20153Preset = ff890Op20153().build<TStandalonePriceDraft>();
    expect(ff890Op20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-3",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ff890Op20153 preset when built for graphql`, () => {
    const ff890Op20153PresetGraphql =
      ff890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-3",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
