import type { TStandalonePriceDraft } from '../../../types';
import z890Op20238 from './z-890-op-2023-8';

describe(`with z890Op20238 preset`, () => {
  it(`should return a z890Op20238 preset`, () => {
    const z890Op20238Preset = z890Op20238().build<TStandalonePriceDraft>();
    expect(z890Op20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-8",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20238 preset when built for graphql`, () => {
    const z890Op20238PresetGraphql =
      z890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-8",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
