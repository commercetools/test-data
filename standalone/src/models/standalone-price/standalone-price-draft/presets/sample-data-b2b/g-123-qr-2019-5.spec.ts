import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20195 from './g-123-qr-2019-5';

describe(`with g123Qr20195 preset`, () => {
  it(`should return a g123Qr20195 preset`, () => {
    const g123Qr20195Preset = g123Qr20195().build<TStandalonePriceDraft>();
    expect(g123Qr20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-5",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20195 preset when built for graphql`, () => {
    const g123Qr20195PresetGraphql =
      g123Qr20195().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-5",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
