import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20151 from './ff-890-op-2015-1';

describe(`with ff890Op20151 preset`, () => {
  it(`should return a ff890Op20151 preset`, () => {
    const ff890Op20151Preset = ff890Op20151().build<TStandalonePriceDraft>();
    expect(ff890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-1",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ff890Op20151 preset when built for graphql`, () => {
    const ff890Op20151PresetGraphql =
      ff890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-1",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
