import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20158 from './aa-123-qr-2015-8';

describe(`with aa123Qr20158 preset`, () => {
  it(`should return a aa123Qr20158 preset`, () => {
    const aa123Qr20158Preset = aa123Qr20158().build<TStandalonePriceDraft>();
    expect(aa123Qr20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-8",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20158 preset when built for graphql`, () => {
    const aa123Qr20158PresetGraphql =
      aa123Qr20158().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-8",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
