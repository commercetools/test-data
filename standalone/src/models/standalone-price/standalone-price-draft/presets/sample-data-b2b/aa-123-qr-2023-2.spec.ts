import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20232 from './aa-123-qr-2023-2';

describe(`with aa123Qr20232 preset`, () => {
  it(`should return a aa123Qr20232 preset`, () => {
    const aa123Qr20232Preset = aa123Qr20232().build<TStandalonePriceDraft>();
    expect(aa123Qr20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20232 preset when built for graphql`, () => {
    const aa123Qr20232PresetGraphql =
      aa123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
