import type { TStandalonePriceDraft } from '../../../types';
import l890Op20153 from './l-890-op-2015-3';

describe(`with l890Op20153 preset`, () => {
  it(`should return a l890Op20153 preset`, () => {
    const l890Op20153Preset = l890Op20153().build<TStandalonePriceDraft>();
    expect(l890Op20153Preset).toMatchInlineSnapshot(`
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
        "key": "l890-op-2015-3",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20153 preset when built for graphql`, () => {
    const l890Op20153PresetGraphql =
      l890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "l890-op-2015-3",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
