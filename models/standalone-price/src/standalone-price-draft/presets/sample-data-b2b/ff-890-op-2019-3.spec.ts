import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20193 from './ff-890-op-2019-3';

describe(`with ff890Op20193 preset`, () => {
  it(`should return a ff890Op20193 preset`, () => {
    const ff890Op20193Preset = ff890Op20193().build<TStandalonePriceDraft>();
    expect(ff890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-3",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ff890Op20193 preset when built for graphql`, () => {
    const ff890Op20193PresetGraphql =
      ff890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-3",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
