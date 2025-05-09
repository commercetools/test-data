import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen5 from './jjj-890-op-green-5';

describe(`with jjj890OpGreen5 preset`, () => {
  it(`should return a jjj890OpGreen5 preset`, () => {
    const jjj890OpGreen5Preset =
      jjj890OpGreen5().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-5",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen5 preset when built for graphql`, () => {
    const jjj890OpGreen5PresetGraphql =
      jjj890OpGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-5",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
