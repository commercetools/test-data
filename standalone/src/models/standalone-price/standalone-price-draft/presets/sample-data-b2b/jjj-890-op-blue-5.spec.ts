import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue5 from './jjj-890-op-blue-5';

describe(`with jjj890OpBlue5 preset`, () => {
  it(`should return a jjj890OpBlue5 preset`, () => {
    const jjj890OpBlue5Preset = jjj890OpBlue5().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-5",
        "sku": "jjj890-op-blue",
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

  it(`should return a jjj890OpBlue5 preset when built for graphql`, () => {
    const jjj890OpBlue5PresetGraphql =
      jjj890OpBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-5",
        "sku": "jjj890-op-blue",
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
