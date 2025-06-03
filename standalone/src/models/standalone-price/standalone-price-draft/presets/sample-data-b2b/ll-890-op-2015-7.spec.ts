import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20157 from './ll-890-op-2015-7';

describe(`with ll890Op20157 preset`, () => {
  it(`should return a ll890Op20157 preset`, () => {
    const ll890Op20157Preset = ll890Op20157().build<TStandalonePriceDraft>();
    expect(ll890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20157 preset when built for graphql`, () => {
    const ll890Op20157PresetGraphql =
      ll890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
