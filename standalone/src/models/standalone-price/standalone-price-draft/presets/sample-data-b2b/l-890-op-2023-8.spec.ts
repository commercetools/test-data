import type { TStandalonePriceDraft } from '../../../types';
import l890Op20238 from './l-890-op-2023-8';

describe(`with l890Op20238 preset`, () => {
  it(`should return a l890Op20238 preset`, () => {
    const l890Op20238Preset = l890Op20238().build<TStandalonePriceDraft>();
    expect(l890Op20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-8",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20238 preset when built for graphql`, () => {
    const l890Op20238PresetGraphql =
      l890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-8",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
