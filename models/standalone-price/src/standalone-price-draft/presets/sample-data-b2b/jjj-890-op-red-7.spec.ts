import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed7 from './jjj-890-op-red-7';

describe(`with jjj890OpRed7 preset`, () => {
  it(`should return a jjj890OpRed7 preset`, () => {
    const jjj890OpRed7Preset = jjj890OpRed7().build<TStandalonePriceDraft>();
    expect(jjj890OpRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-7",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed7 preset when built for graphql`, () => {
    const jjj890OpRed7PresetGraphql =
      jjj890OpRed7().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-7",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
