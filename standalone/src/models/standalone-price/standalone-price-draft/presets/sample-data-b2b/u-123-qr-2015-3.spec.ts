import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20153 from './u-123-qr-2015-3';

describe(`with u123Qr20153 preset`, () => {
  it(`should return a u123Qr20153 preset`, () => {
    const u123Qr20153Preset = u123Qr20153().build<TStandalonePriceDraft>();
    expect(u123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a u123Qr20153 preset when built for graphql`, () => {
    const u123Qr20153PresetGraphql =
      u123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
