import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20232 from './rr-890-op-2023-2';

describe(`with rr890Op20232 preset`, () => {
  it(`should return a rr890Op20232 preset`, () => {
    const rr890Op20232Preset = rr890Op20232().build<TStandalonePriceDraft>();
    expect(rr890Op20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-2",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20232 preset when built for graphql`, () => {
    const rr890Op20232PresetGraphql =
      rr890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-2",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
