import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue4 from './jjj-890-op-blue-4';

describe(`with jjj890OpBlue4 preset`, () => {
  it(`should return a jjj890OpBlue4 preset`, () => {
    const jjj890OpBlue4Preset = jjj890OpBlue4().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue4Preset).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-blue-4",
        "sku": "jjj890-op-blue",
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

  it(`should return a jjj890OpBlue4 preset when built for graphql`, () => {
    const jjj890OpBlue4PresetGraphql =
      jjj890OpBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-blue-4",
        "sku": "jjj890-op-blue",
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
