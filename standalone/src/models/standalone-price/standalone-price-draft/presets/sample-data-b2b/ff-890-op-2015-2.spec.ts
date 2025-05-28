import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20152 from './ff-890-op-2015-2';

describe(`with ff890Op20152 preset`, () => {
  it(`should return a ff890Op20152 preset`, () => {
    const ff890Op20152Preset = ff890Op20152().build<TStandalonePriceDraft>();
    expect(ff890Op20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20152 preset when built for graphql`, () => {
    const ff890Op20152PresetGraphql =
      ff890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
