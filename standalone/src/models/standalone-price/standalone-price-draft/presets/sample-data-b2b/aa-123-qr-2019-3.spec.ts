import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20193 from './aa-123-qr-2019-3';

describe(`with aa123Qr20193 preset`, () => {
  it(`should return a aa123Qr20193 preset`, () => {
    const aa123Qr20193Preset = aa123Qr20193().build<TStandalonePriceDraft>();
    expect(aa123Qr20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-3",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1716000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20193 preset when built for graphql`, () => {
    const aa123Qr20193PresetGraphql =
      aa123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-3",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1716000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
