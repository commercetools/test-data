import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue5 from './ddd-890-op-blue-5';

describe(`with ddd890OpBlue5 preset`, () => {
  it(`should return a ddd890OpBlue5 preset`, () => {
    const ddd890OpBlue5Preset = ddd890OpBlue5().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-5",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue5 preset when built for graphql`, () => {
    const ddd890OpBlue5PresetGraphql =
      ddd890OpBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-5",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
