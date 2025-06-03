import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue4 from './ddd-890-op-blue-4';

describe(`with ddd890OpBlue4 preset`, () => {
  it(`should return a ddd890OpBlue4 preset`, () => {
    const ddd890OpBlue4Preset = ddd890OpBlue4().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-4",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue4 preset when built for graphql`, () => {
    const ddd890OpBlue4PresetGraphql =
      ddd890OpBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-4",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
