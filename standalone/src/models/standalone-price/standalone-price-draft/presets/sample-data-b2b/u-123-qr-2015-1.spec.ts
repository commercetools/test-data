import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20151 from './u-123-qr-2015-1';

describe(`with u123Qr20151 preset`, () => {
  it(`should return a u123Qr20151 preset`, () => {
    const u123Qr20151Preset = u123Qr20151().build<TStandalonePriceDraft>();
    expect(u123Qr20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-1",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a u123Qr20151 preset when built for graphql`, () => {
    const u123Qr20151PresetGraphql =
      u123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-1",
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
