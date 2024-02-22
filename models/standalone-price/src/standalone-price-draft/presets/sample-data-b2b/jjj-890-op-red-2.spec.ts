import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed2 from './jjj-890-op-red-2';

describe(`with jjj890OpRed2 preset`, () => {
  it(`should return a jjj890OpRed2 preset`, () => {
    const jjj890OpRed2Preset = jjj890OpRed2().build<TStandalonePriceDraft>();
    expect(jjj890OpRed2Preset).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-red-2",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8910000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed2 preset when built for graphql`, () => {
    const jjj890OpRed2PresetGraphql =
      jjj890OpRed2().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-red-2",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8910000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
