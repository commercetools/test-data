import type { TStandalonePriceDraft } from '../../../types';
import l890Op20191 from './l-890-op-2019-1';

describe(`with l890Op20191 preset`, () => {
  it(`should return a l890Op20191 preset`, () => {
    const l890Op20191Preset = l890Op20191().build<TStandalonePriceDraft>();
    expect(l890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1815001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a l890Op20191 preset when built for graphql`, () => {
    const l890Op20191PresetGraphql =
      l890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1815001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
