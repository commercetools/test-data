import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen6 from './jjj-890-op-green-6';

describe(`with jjj890OpGreen6 preset`, () => {
  it(`should return a jjj890OpGreen6 preset`, () => {
    const jjj890OpGreen6Preset =
      jjj890OpGreen6().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-6",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen6 preset when built for graphql`, () => {
    const jjj890OpGreen6PresetGraphql =
      jjj890OpGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-6",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
