import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20191 from './rr-890-op-2019-1';

describe(`with rr890Op20191 preset`, () => {
  it(`should return a rr890Op20191 preset`, () => {
    const rr890Op20191Preset = rr890Op20191().build<TStandalonePriceDraft>();
    expect(rr890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-1",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a rr890Op20191 preset when built for graphql`, () => {
    const rr890Op20191PresetGraphql =
      rr890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-1",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
