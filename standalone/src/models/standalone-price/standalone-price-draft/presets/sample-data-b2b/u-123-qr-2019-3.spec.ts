import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20193 from './u-123-qr-2019-3';

describe(`with u123Qr20193 preset`, () => {
  it(`should return a u123Qr20193 preset`, () => {
    const u123Qr20193Preset = u123Qr20193().build<TStandalonePriceDraft>();
    expect(u123Qr20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-3",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2574000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a u123Qr20193 preset when built for graphql`, () => {
    const u123Qr20193PresetGraphql =
      u123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-3",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2574000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
