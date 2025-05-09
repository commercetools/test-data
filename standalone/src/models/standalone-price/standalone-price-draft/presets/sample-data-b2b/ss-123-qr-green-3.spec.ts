import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen3 from './ss-123-qr-green-3';

describe(`with ss123QrGreen3 preset`, () => {
  it(`should return a ss123QrGreen3 preset`, () => {
    const ss123QrGreen3Preset = ss123QrGreen3().build<TStandalonePriceDraft>();
    expect(ss123QrGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-3",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5390000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ss123QrGreen3 preset when built for graphql`, () => {
    const ss123QrGreen3PresetGraphql =
      ss123QrGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-3",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5390000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
