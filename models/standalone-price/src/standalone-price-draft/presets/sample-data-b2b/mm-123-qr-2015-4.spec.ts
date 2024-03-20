import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20154 from './mm-123-qr-2015-4';

describe(`with mm123Qr20154 preset`, () => {
  it(`should return a mm123Qr20154 preset`, () => {
    const mm123Qr20154Preset = mm123Qr20154().build<TStandalonePriceDraft>();
    expect(mm123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-4",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20154 preset when built for graphql`, () => {
    const mm123Qr20154PresetGraphql =
      mm123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-4",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
