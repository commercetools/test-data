import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed6 from './ss-123-qr-red-6';

describe(`with ss123QrRed6 preset`, () => {
  it(`should return a ss123QrRed6 preset`, () => {
    const ss123QrRed6Preset = ss123QrRed6().build<TStandalonePriceDraft>();
    expect(ss123QrRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-6",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrRed6 preset when built for graphql`, () => {
    const ss123QrRed6PresetGraphql =
      ss123QrRed6().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-6",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
