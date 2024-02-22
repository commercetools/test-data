import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue8 from './xx-890-op-blue-8';

describe(`with xx890OpBlue8 preset`, () => {
  it(`should return a xx890OpBlue8 preset`, () => {
    const xx890OpBlue8Preset = xx890OpBlue8().build<TStandalonePriceDraft>();
    expect(xx890OpBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-8",
        "sku": "xx890-op-blue",
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

  it(`should return a xx890OpBlue8 preset when built for graphql`, () => {
    const xx890OpBlue8PresetGraphql =
      xx890OpBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-8",
        "sku": "xx890-op-blue",
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
