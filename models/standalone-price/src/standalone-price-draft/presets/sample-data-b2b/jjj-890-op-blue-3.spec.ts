import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue3 from './jjj-890-op-blue-3';

describe(`with jjj890OpBlue3 preset`, () => {
  it(`should return a jjj890OpBlue3 preset`, () => {
    const jjj890OpBlue3Preset = jjj890OpBlue3().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-blue-3",
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12870000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue3 preset when built for graphql`, () => {
    const jjj890OpBlue3PresetGraphql =
      jjj890OpBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-blue-3",
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12870000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
