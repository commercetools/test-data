import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue7 from './xx-890-op-blue-7';

describe(`with xx890OpBlue7 preset`, () => {
  it(`should return a xx890OpBlue7 preset`, () => {
    const xx890OpBlue7Preset = xx890OpBlue7().build<TStandalonePriceDraft>();
    expect(xx890OpBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-7",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue7 preset when built for graphql`, () => {
    const xx890OpBlue7PresetGraphql =
      xx890OpBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-7",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
