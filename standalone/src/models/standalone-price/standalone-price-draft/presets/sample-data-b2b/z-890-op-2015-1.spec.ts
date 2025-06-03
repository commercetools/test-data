import type { TStandalonePriceDraft } from '../../../types';
import z890Op20151 from './z-890-op-2015-1';

describe(`with z890Op20151 preset`, () => {
  it(`should return a z890Op20151 preset`, () => {
    const z890Op20151Preset = z890Op20151().build<TStandalonePriceDraft>();
    expect(z890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a z890Op20151 preset when built for graphql`, () => {
    const z890Op20151PresetGraphql =
      z890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
