import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed5 from './jjj-890-op-red-5';

describe(`with jjj890OpRed5 preset`, () => {
  it(`should return a jjj890OpRed5 preset`, () => {
    const jjj890OpRed5Preset = jjj890OpRed5().build<TStandalonePriceDraft>();
    expect(jjj890OpRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-5",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed5 preset when built for graphql`, () => {
    const jjj890OpRed5PresetGraphql =
      jjj890OpRed5().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-5",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
