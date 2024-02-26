import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue6 from './ss-123-qr-blue-6';

describe(`with ss123QrBlue6 preset`, () => {
  it(`should return a ss123QrBlue6 preset`, () => {
    const ss123QrBlue6Preset = ss123QrBlue6().build<TStandalonePriceDraft>();
    expect(ss123QrBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-6",
        "sku": "ss123-qr-blue",
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

  it(`should return a ss123QrBlue6 preset when built for graphql`, () => {
    const ss123QrBlue6PresetGraphql =
      ss123QrBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-6",
        "sku": "ss123-qr-blue",
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
