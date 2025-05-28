import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed6 from './xx-890-op-red-6';

describe(`with xx890OpRed6 preset`, () => {
  it(`should return a xx890OpRed6 preset`, () => {
    const xx890OpRed6Preset = xx890OpRed6().build<TStandalonePriceDraft>();
    expect(xx890OpRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-6",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpRed6 preset when built for graphql`, () => {
    const xx890OpRed6PresetGraphql =
      xx890OpRed6().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-6",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
