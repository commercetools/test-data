import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue8 from './jjj-890-op-blue-8';

describe(`with jjj890OpBlue8 preset`, () => {
  it(`should return a jjj890OpBlue8 preset`, () => {
    const jjj890OpBlue8Preset = jjj890OpBlue8().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-8",
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue8 preset when built for graphql`, () => {
    const jjj890OpBlue8PresetGraphql =
      jjj890OpBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-8",
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
