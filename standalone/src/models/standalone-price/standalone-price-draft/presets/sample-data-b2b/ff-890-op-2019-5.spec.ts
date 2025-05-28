import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20195 from './ff-890-op-2019-5';

describe(`with ff890Op20195 preset`, () => {
  it(`should return a ff890Op20195 preset`, () => {
    const ff890Op20195Preset = ff890Op20195().build<TStandalonePriceDraft>();
    expect(ff890Op20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-5",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2019",
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

  it(`should return a ff890Op20195 preset when built for graphql`, () => {
    const ff890Op20195PresetGraphql =
      ff890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-5",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2019",
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
