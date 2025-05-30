import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20152 from './mm-123-qr-2015-2';

describe(`with mm123Qr20152 preset`, () => {
  it(`should return a mm123Qr20152 preset`, () => {
    const mm123Qr20152Preset = mm123Qr20152().build<TStandalonePriceDraft>();
    expect(mm123Qr20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-2",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1782000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20152 preset when built for graphql`, () => {
    const mm123Qr20152PresetGraphql =
      mm123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-2",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1782000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
