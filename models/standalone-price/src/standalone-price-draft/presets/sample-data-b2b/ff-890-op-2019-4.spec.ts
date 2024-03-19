import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20194 from './ff-890-op-2019-4';

describe(`with ff890Op20194 preset`, () => {
  it(`should return a ff890Op20194 preset`, () => {
    const ff890Op20194Preset = ff890Op20194().build<TStandalonePriceDraft>();
    expect(ff890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-4",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ff890Op20194 preset when built for graphql`, () => {
    const ff890Op20194PresetGraphql =
      ff890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-4",
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
