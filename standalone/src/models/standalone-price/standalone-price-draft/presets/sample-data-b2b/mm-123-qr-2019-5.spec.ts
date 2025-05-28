import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20195 from './mm-123-qr-2019-5';

describe(`with mm123Qr20195 preset`, () => {
  it(`should return a mm123Qr20195 preset`, () => {
    const mm123Qr20195Preset = mm123Qr20195().build<TStandalonePriceDraft>();
    expect(mm123Qr20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-5",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1620000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20195 preset when built for graphql`, () => {
    const mm123Qr20195PresetGraphql =
      mm123Qr20195().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-5",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1620000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
