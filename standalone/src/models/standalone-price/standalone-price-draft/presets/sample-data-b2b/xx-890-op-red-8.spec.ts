import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed8 from './xx-890-op-red-8';

describe(`with xx890OpRed8 preset`, () => {
  it(`should return a xx890OpRed8 preset`, () => {
    const xx890OpRed8Preset = xx890OpRed8().build<TStandalonePriceDraft>();
    expect(xx890OpRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-8",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpRed8 preset when built for graphql`, () => {
    const xx890OpRed8PresetGraphql =
      xx890OpRed8().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-8",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
