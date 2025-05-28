import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue7 from './jjj-890-op-blue-7';

describe(`with jjj890OpBlue7 preset`, () => {
  it(`should return a jjj890OpBlue7 preset`, () => {
    const jjj890OpBlue7Preset = jjj890OpBlue7().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-7",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue7 preset when built for graphql`, () => {
    const jjj890OpBlue7PresetGraphql =
      jjj890OpBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-7",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
