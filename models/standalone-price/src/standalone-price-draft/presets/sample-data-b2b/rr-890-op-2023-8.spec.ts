import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20238 from './rr-890-op-2023-8';

describe(`with rr890Op20238 preset`, () => {
  it(`should return a rr890Op20238 preset`, () => {
    const rr890Op20238Preset = rr890Op20238().build<TStandalonePriceDraft>();
    expect(rr890Op20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-8",
        "sku": "rr890-op-2023",
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

  it(`should return a rr890Op20238 preset when built for graphql`, () => {
    const rr890Op20238PresetGraphql =
      rr890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-8",
        "sku": "rr890-op-2023",
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
