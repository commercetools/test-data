import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20157 from './ff-890-op-2015-7';

describe(`with ff890Op20157 preset`, () => {
  it(`should return a ff890Op20157 preset`, () => {
    const ff890Op20157Preset = ff890Op20157().build<TStandalonePriceDraft>();
    expect(ff890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ff890Op20157 preset when built for graphql`, () => {
    const ff890Op20157PresetGraphql =
      ff890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
