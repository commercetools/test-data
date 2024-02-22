import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20192 from './u-123-qr-2019-2';

describe(`with u123Qr20192 preset`, () => {
  it(`should return a u123Qr20192 preset`, () => {
    const u123Qr20192Preset = u123Qr20192().build<TStandalonePriceDraft>();
    expect(u123Qr20192Preset).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2019-2",
        "sku": "u123-qr-2019",
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

  it(`should return a u123Qr20192 preset when built for graphql`, () => {
    const u123Qr20192PresetGraphql =
      u123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "u123-qr-2019-2",
        "sku": "u123-qr-2019",
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
