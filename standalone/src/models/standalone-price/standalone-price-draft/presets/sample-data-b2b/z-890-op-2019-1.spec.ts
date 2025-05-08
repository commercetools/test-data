import type { TStandalonePriceDraft } from '../../../types';
import z890Op20191 from './z-890-op-2019-1';

describe(`with z890Op20191 preset`, () => {
  it(`should return a z890Op20191 preset`, () => {
    const z890Op20191Preset = z890Op20191().build<TStandalonePriceDraft>();
    expect(z890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-1",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3267001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a z890Op20191 preset when built for graphql`, () => {
    const z890Op20191PresetGraphql =
      z890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-1",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3267001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
