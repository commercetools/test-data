import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20191 from './n-123-qr-2019-1';

describe(`with n123Qr20191 preset`, () => {
  it(`should return a n123Qr20191 preset`, () => {
    const n123Qr20191Preset = n123Qr20191().build<TStandalonePriceDraft>();
    expect(n123Qr20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 968001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a n123Qr20191 preset when built for graphql`, () => {
    const n123Qr20191PresetGraphql =
      n123Qr20191().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 968001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
