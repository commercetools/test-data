import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen8 from './jjj-890-op-green-8';

describe(`with jjj890OpGreen8 preset`, () => {
  it(`should return a jjj890OpGreen8 preset`, () => {
    const jjj890OpGreen8Preset =
      jjj890OpGreen8().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-8",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen8 preset when built for graphql`, () => {
    const jjj890OpGreen8PresetGraphql =
      jjj890OpGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-8",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
