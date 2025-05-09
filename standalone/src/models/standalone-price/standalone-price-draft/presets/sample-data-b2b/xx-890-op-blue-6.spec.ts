import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue6 from './xx-890-op-blue-6';

describe(`with xx890OpBlue6 preset`, () => {
  it(`should return a xx890OpBlue6 preset`, () => {
    const xx890OpBlue6Preset = xx890OpBlue6().build<TStandalonePriceDraft>();
    expect(xx890OpBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-6",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue6 preset when built for graphql`, () => {
    const xx890OpBlue6PresetGraphql =
      xx890OpBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-6",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
