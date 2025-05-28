import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue2 from './ddd-890-op-blue-2';

describe(`with ddd890OpBlue2 preset`, () => {
  it(`should return a ddd890OpBlue2 preset`, () => {
    const ddd890OpBlue2Preset = ddd890OpBlue2().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-2",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue2 preset when built for graphql`, () => {
    const ddd890OpBlue2PresetGraphql =
      ddd890OpBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-2",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
