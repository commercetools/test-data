import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen5 from './xx-890-op-green-5';

describe(`with xx890OpGreen5 preset`, () => {
  it(`should return a xx890OpGreen5 preset`, () => {
    const xx890OpGreen5Preset = xx890OpGreen5().build<TStandalonePriceDraft>();
    expect(xx890OpGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-5",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen5 preset when built for graphql`, () => {
    const xx890OpGreen5PresetGraphql =
      xx890OpGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-5",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
