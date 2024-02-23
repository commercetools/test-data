import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen2 from './jjj-890-op-green-2';

describe(`with jjj890OpGreen2 preset`, () => {
  it(`should return a jjj890OpGreen2 preset`, () => {
    const jjj890OpGreen2Preset =
      jjj890OpGreen2().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-2",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10890000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen2 preset when built for graphql`, () => {
    const jjj890OpGreen2PresetGraphql =
      jjj890OpGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-2",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10890000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
