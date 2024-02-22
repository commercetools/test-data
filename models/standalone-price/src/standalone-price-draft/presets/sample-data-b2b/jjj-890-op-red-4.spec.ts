import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed4 from './jjj-890-op-red-4';

describe(`with jjj890OpRed4 preset`, () => {
  it(`should return a jjj890OpRed4 preset`, () => {
    const jjj890OpRed4Preset = jjj890OpRed4().build<TStandalonePriceDraft>();
    expect(jjj890OpRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-4",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed4 preset when built for graphql`, () => {
    const jjj890OpRed4PresetGraphql =
      jjj890OpRed4().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-4",
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
