import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20154 from './u-123-qr-2015-4';

describe(`with u123Qr20154 preset`, () => {
  it(`should return a u123Qr20154 preset`, () => {
    const u123Qr20154Preset = u123Qr20154().build<TStandalonePriceDraft>();
    expect(u123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-4",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2015",
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

  it(`should return a u123Qr20154 preset when built for graphql`, () => {
    const u123Qr20154PresetGraphql =
      u123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2015-4",
        "recurrencePolicy": undefined,
        "sku": "u123-qr-2015",
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
