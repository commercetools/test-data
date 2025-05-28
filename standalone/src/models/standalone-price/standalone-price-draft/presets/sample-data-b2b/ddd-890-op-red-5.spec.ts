import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed5 from './ddd-890-op-red-5';

describe(`with ddd890OpRed5 preset`, () => {
  it(`should return a ddd890OpRed5 preset`, () => {
    const ddd890OpRed5Preset = ddd890OpRed5().build<TStandalonePriceDraft>();
    expect(ddd890OpRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-5",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
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

  it(`should return a ddd890OpRed5 preset when built for graphql`, () => {
    const ddd890OpRed5PresetGraphql =
      ddd890OpRed5().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-5",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
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
