import type { TStandalonePriceDraft } from '../../../types';
import l890Op20198 from './l-890-op-2019-8';

describe(`with l890Op20198 preset`, () => {
  it(`should return a l890Op20198 preset`, () => {
    const l890Op20198Preset = l890Op20198().build<TStandalonePriceDraft>();
    expect(l890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-8",
        "sku": "l890-op-2019",
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

  it(`should return a l890Op20198 preset when built for graphql`, () => {
    const l890Op20198PresetGraphql =
      l890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-8",
        "sku": "l890-op-2019",
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
