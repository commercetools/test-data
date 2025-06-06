import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20157 from './rr-890-op-2015-7';

describe(`with rr890Op20157 preset`, () => {
  it(`should return a rr890Op20157 preset`, () => {
    const rr890Op20157Preset = rr890Op20157().build<TStandalonePriceDraft>();
    expect(rr890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20157 preset when built for graphql`, () => {
    const rr890Op20157PresetGraphql =
      rr890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
