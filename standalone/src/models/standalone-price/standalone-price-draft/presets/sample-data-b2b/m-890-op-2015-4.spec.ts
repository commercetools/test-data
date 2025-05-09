import type { TStandalonePriceDraft } from '../../../types';
import m890Op20154 from './m-890-op-2015-4';

describe(`with m890Op20154 preset`, () => {
  it(`should return a m890Op20154 preset`, () => {
    const m890Op20154Preset = m890Op20154().build<TStandalonePriceDraft>();
    expect(m890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-4",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20154 preset when built for graphql`, () => {
    const m890Op20154PresetGraphql =
      m890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-4",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
