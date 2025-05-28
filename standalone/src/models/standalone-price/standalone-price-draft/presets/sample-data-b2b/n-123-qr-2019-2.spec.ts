import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20192 from './n-123-qr-2019-2';

describe(`with n123Qr20192 preset`, () => {
  it(`should return a n123Qr20192 preset`, () => {
    const n123Qr20192Preset = n123Qr20192().build<TStandalonePriceDraft>();
    expect(n123Qr20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-2",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a n123Qr20192 preset when built for graphql`, () => {
    const n123Qr20192PresetGraphql =
      n123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-2",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
