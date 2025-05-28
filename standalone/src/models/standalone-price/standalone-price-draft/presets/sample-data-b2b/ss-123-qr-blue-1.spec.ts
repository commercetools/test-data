import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue1 from './ss-123-qr-blue-1';

describe(`with ss123QrBlue1 preset`, () => {
  it(`should return a ss123QrBlue1 preset`, () => {
    const ss123QrBlue1Preset = ss123QrBlue1().build<TStandalonePriceDraft>();
    expect(ss123QrBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-1",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue1 preset when built for graphql`, () => {
    const ss123QrBlue1PresetGraphql =
      ss123QrBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-1",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
