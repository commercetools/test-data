import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20191 from './g-123-qr-2019-1';

describe(`with g123Qr20191 preset`, () => {
  it(`should return a g123Qr20191 preset`, () => {
    const g123Qr20191Preset = g123Qr20191().build<TStandalonePriceDraft>();
    expect(g123Qr20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a g123Qr20191 preset when built for graphql`, () => {
    const g123Qr20191PresetGraphql =
      g123Qr20191().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
