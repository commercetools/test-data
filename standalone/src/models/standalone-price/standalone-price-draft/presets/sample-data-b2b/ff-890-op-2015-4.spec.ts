import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20154 from './ff-890-op-2015-4';

describe(`with ff890Op20154 preset`, () => {
  it(`should return a ff890Op20154 preset`, () => {
    const ff890Op20154Preset = ff890Op20154().build<TStandalonePriceDraft>();
    expect(ff890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-4",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
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

  it(`should return a ff890Op20154 preset when built for graphql`, () => {
    const ff890Op20154PresetGraphql =
      ff890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-4",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
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
