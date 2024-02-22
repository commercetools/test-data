import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20192 from './mm-123-qr-2019-2';

describe(`with mm123Qr20192 preset`, () => {
  it(`should return a mm123Qr20192 preset`, () => {
    const mm123Qr20192Preset = mm123Qr20192().build<TStandalonePriceDraft>();
    expect(mm123Qr20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-2",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20192 preset when built for graphql`, () => {
    const mm123Qr20192PresetGraphql =
      mm123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-2",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
