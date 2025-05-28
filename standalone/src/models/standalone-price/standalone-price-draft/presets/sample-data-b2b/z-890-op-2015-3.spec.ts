import type { TStandalonePriceDraft } from '../../../types';
import z890Op20153 from './z-890-op-2015-3';

describe(`with z890Op20153 preset`, () => {
  it(`should return a z890Op20153 preset`, () => {
    const z890Op20153Preset = z890Op20153().build<TStandalonePriceDraft>();
    expect(z890Op20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-3",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3564000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20153 preset when built for graphql`, () => {
    const z890Op20153PresetGraphql =
      z890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-3",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3564000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
