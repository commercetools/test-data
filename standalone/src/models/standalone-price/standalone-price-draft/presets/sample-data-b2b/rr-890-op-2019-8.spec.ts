import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20198 from './rr-890-op-2019-8';

describe(`with rr890Op20198 preset`, () => {
  it(`should return a rr890Op20198 preset`, () => {
    const rr890Op20198Preset = rr890Op20198().build<TStandalonePriceDraft>();
    expect(rr890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-8",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20198 preset when built for graphql`, () => {
    const rr890Op20198PresetGraphql =
      rr890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-8",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
