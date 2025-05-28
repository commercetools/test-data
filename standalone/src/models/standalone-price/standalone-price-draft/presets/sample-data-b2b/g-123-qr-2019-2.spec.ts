import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20192 from './g-123-qr-2019-2';

describe(`with g123Qr20192 preset`, () => {
  it(`should return a g123Qr20192 preset`, () => {
    const g123Qr20192Preset = g123Qr20192().build<TStandalonePriceDraft>();
    expect(g123Qr20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-2",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20192 preset when built for graphql`, () => {
    const g123Qr20192PresetGraphql =
      g123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-2",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
