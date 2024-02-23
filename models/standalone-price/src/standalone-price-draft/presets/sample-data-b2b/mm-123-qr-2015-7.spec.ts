import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20157 from './mm-123-qr-2015-7';

describe(`with mm123Qr20157 preset`, () => {
  it(`should return a mm123Qr20157 preset`, () => {
    const mm123Qr20157Preset = mm123Qr20157().build<TStandalonePriceDraft>();
    expect(mm123Qr20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-7",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20157 preset when built for graphql`, () => {
    const mm123Qr20157PresetGraphql =
      mm123Qr20157().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-7",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
