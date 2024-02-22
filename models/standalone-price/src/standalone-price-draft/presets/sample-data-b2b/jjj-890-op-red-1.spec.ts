import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed1 from './jjj-890-op-red-1';

describe(`with jjj890OpRed1 preset`, () => {
  it(`should return a jjj890OpRed1 preset`, () => {
    const jjj890OpRed1Preset = jjj890OpRed1().build<TStandalonePriceDraft>();
    expect(jjj890OpRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-1",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed1 preset when built for graphql`, () => {
    const jjj890OpRed1PresetGraphql =
      jjj890OpRed1().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-1",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
