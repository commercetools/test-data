import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue2 from './jjj-890-op-blue-2';

describe(`with jjj890OpBlue2 preset`, () => {
  it(`should return a jjj890OpBlue2 preset`, () => {
    const jjj890OpBlue2Preset = jjj890OpBlue2().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-2",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue2 preset when built for graphql`, () => {
    const jjj890OpBlue2PresetGraphql =
      jjj890OpBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-2",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
