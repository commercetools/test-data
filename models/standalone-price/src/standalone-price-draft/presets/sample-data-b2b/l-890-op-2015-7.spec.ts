import type { TStandalonePriceDraft } from '../../../types';
import l890Op20157 from './l-890-op-2015-7';

describe(`with l890Op20157 preset`, () => {
  it(`should return a l890Op20157 preset`, () => {
    const l890Op20157Preset = l890Op20157().build<TStandalonePriceDraft>();
    expect(l890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-7",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20157 preset when built for graphql`, () => {
    const l890Op20157PresetGraphql =
      l890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-7",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
