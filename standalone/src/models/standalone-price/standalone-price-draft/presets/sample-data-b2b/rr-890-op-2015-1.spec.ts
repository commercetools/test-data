import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20151 from './rr-890-op-2015-1';

describe(`with rr890Op20151 preset`, () => {
  it(`should return a rr890Op20151 preset`, () => {
    const rr890Op20151Preset = rr890Op20151().build<TStandalonePriceDraft>();
    expect(rr890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a rr890Op20151 preset when built for graphql`, () => {
    const rr890Op20151PresetGraphql =
      rr890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
