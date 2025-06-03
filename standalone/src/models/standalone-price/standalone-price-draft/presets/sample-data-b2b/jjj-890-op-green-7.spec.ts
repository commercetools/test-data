import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen7 from './jjj-890-op-green-7';

describe(`with jjj890OpGreen7 preset`, () => {
  it(`should return a jjj890OpGreen7 preset`, () => {
    const jjj890OpGreen7Preset =
      jjj890OpGreen7().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-7",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-green",
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

  it(`should return a jjj890OpGreen7 preset when built for graphql`, () => {
    const jjj890OpGreen7PresetGraphql =
      jjj890OpGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-7",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-green",
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
