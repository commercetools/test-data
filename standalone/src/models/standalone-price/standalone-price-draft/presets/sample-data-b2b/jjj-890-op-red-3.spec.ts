import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed3 from './jjj-890-op-red-3';

describe(`with jjj890OpRed3 preset`, () => {
  it(`should return a jjj890OpRed3 preset`, () => {
    const jjj890OpRed3Preset = jjj890OpRed3().build<TStandalonePriceDraft>();
    expect(jjj890OpRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-3",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11880000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed3 preset when built for graphql`, () => {
    const jjj890OpRed3PresetGraphql =
      jjj890OpRed3().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-3",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11880000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
