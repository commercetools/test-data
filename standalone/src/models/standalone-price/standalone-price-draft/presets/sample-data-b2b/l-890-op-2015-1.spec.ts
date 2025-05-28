import type { TStandalonePriceDraft } from '../../../types';
import l890Op20151 from './l-890-op-2015-1';

describe(`with l890Op20151 preset`, () => {
  it(`should return a l890Op20151 preset`, () => {
    const l890Op20151Preset = l890Op20151().build<TStandalonePriceDraft>();
    expect(l890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a l890Op20151 preset when built for graphql`, () => {
    const l890Op20151PresetGraphql =
      l890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
