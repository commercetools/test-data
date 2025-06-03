import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20237 from './mm-123-qr-2023-7';

describe(`with mm123Qr20237 preset`, () => {
  it(`should return a mm123Qr20237 preset`, () => {
    const mm123Qr20237Preset = mm123Qr20237().build<TStandalonePriceDraft>();
    expect(mm123Qr20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2023",
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

  it(`should return a mm123Qr20237 preset when built for graphql`, () => {
    const mm123Qr20237PresetGraphql =
      mm123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2023",
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
