import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen4 from './xx-890-op-green-4';

describe(`with xx890OpGreen4 preset`, () => {
  it(`should return a xx890OpGreen4 preset`, () => {
    const xx890OpGreen4Preset = xx890OpGreen4().build<TStandalonePriceDraft>();
    expect(xx890OpGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-4",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen4 preset when built for graphql`, () => {
    const xx890OpGreen4PresetGraphql =
      xx890OpGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-4",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
