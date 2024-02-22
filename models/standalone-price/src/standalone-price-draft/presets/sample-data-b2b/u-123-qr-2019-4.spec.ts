import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20194 from './u-123-qr-2019-4';

describe(`with u123Qr20194 preset`, () => {
  it(`should return a u123Qr20194 preset`, () => {
    const u123Qr20194Preset = u123Qr20194().build<TStandalonePriceDraft>();
    expect(u123Qr20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-4",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a u123Qr20194 preset when built for graphql`, () => {
    const u123Qr20194PresetGraphql =
      u123Qr20194().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-4",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
