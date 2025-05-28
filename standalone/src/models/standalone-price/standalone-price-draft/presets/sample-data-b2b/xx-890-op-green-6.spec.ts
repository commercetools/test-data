import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen6 from './xx-890-op-green-6';

describe(`with xx890OpGreen6 preset`, () => {
  it(`should return a xx890OpGreen6 preset`, () => {
    const xx890OpGreen6Preset = xx890OpGreen6().build<TStandalonePriceDraft>();
    expect(xx890OpGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-6",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-green",
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

  it(`should return a xx890OpGreen6 preset when built for graphql`, () => {
    const xx890OpGreen6PresetGraphql =
      xx890OpGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-6",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-green",
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
