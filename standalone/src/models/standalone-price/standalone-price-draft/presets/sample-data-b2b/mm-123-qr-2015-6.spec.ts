import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20156 from './mm-123-qr-2015-6';

describe(`with mm123Qr20156 preset`, () => {
  it(`should return a mm123Qr20156 preset`, () => {
    const mm123Qr20156Preset = mm123Qr20156().build<TStandalonePriceDraft>();
    expect(mm123Qr20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-6",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20156 preset when built for graphql`, () => {
    const mm123Qr20156PresetGraphql =
      mm123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-6",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
