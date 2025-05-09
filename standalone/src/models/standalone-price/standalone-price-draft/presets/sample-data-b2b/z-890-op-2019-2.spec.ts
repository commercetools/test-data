import type { TStandalonePriceDraft } from '../../../types';
import z890Op20192 from './z-890-op-2019-2';

describe(`with z890Op20192 preset`, () => {
  it(`should return a z890Op20192 preset`, () => {
    const z890Op20192Preset = z890Op20192().build<TStandalonePriceDraft>();
    expect(z890Op20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-2",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20192 preset when built for graphql`, () => {
    const z890Op20192PresetGraphql =
      z890Op20192().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-2",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
