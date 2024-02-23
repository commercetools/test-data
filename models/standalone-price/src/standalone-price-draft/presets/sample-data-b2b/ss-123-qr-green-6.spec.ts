import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen6 from './ss-123-qr-green-6';

describe(`with ss123QrGreen6 preset`, () => {
  it(`should return a ss123QrGreen6 preset`, () => {
    const ss123QrGreen6Preset = ss123QrGreen6().build<TStandalonePriceDraft>();
    expect(ss123QrGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-6",
        "sku": "ss123-qr-green",
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

  it(`should return a ss123QrGreen6 preset when built for graphql`, () => {
    const ss123QrGreen6PresetGraphql =
      ss123QrGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-6",
        "sku": "ss123-qr-green",
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
