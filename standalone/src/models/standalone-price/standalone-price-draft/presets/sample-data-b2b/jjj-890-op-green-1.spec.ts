import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen1 from './jjj-890-op-green-1';

describe(`with jjj890OpGreen1 preset`, () => {
  it(`should return a jjj890OpGreen1 preset`, () => {
    const jjj890OpGreen1Preset =
      jjj890OpGreen1().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-1",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11880000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen1 preset when built for graphql`, () => {
    const jjj890OpGreen1PresetGraphql =
      jjj890OpGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-1",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11880000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
