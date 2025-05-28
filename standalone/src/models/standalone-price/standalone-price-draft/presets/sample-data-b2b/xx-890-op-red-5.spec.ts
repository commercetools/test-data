import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed5 from './xx-890-op-red-5';

describe(`with xx890OpRed5 preset`, () => {
  it(`should return a xx890OpRed5 preset`, () => {
    const xx890OpRed5Preset = xx890OpRed5().build<TStandalonePriceDraft>();
    expect(xx890OpRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-5",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpRed5 preset when built for graphql`, () => {
    const xx890OpRed5PresetGraphql =
      xx890OpRed5().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-5",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
