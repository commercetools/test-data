import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20196 from './aa-123-qr-2019-6';

describe(`with aa123Qr20196 preset`, () => {
  it(`should return a aa123Qr20196 preset`, () => {
    const aa123Qr20196Preset = aa123Qr20196().build<TStandalonePriceDraft>();
    expect(aa123Qr20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-6",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20196 preset when built for graphql`, () => {
    const aa123Qr20196PresetGraphql =
      aa123Qr20196().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-6",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
