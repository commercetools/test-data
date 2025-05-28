import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen4 from './ddd-890-op-green-4';

describe(`with ddd890OpGreen4 preset`, () => {
  it(`should return a ddd890OpGreen4 preset`, () => {
    const ddd890OpGreen4Preset =
      ddd890OpGreen4().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-4",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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

  it(`should return a ddd890OpGreen4 preset when built for graphql`, () => {
    const ddd890OpGreen4PresetGraphql =
      ddd890OpGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-4",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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
