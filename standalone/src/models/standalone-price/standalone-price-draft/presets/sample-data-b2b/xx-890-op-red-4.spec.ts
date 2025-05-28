import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed4 from './xx-890-op-red-4';

describe(`with xx890OpRed4 preset`, () => {
  it(`should return a xx890OpRed4 preset`, () => {
    const xx890OpRed4Preset = xx890OpRed4().build<TStandalonePriceDraft>();
    expect(xx890OpRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-4",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpRed4 preset when built for graphql`, () => {
    const xx890OpRed4PresetGraphql =
      xx890OpRed4().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-4",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
