import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed7 from './xx-890-op-red-7';

describe(`with xx890OpRed7 preset`, () => {
  it(`should return a xx890OpRed7 preset`, () => {
    const xx890OpRed7Preset = xx890OpRed7().build<TStandalonePriceDraft>();
    expect(xx890OpRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-7",
        "sku": "xx890-op-red",
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

  it(`should return a xx890OpRed7 preset when built for graphql`, () => {
    const xx890OpRed7PresetGraphql =
      xx890OpRed7().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-7",
        "sku": "xx890-op-red",
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
