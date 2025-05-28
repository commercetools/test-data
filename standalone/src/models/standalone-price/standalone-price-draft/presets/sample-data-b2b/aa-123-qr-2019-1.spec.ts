import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20191 from './aa-123-qr-2019-1';

describe(`with aa123Qr20191 preset`, () => {
  it(`should return a aa123Qr20191 preset`, () => {
    const aa123Qr20191Preset = aa123Qr20191().build<TStandalonePriceDraft>();
    expect(aa123Qr20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aa123Qr20191 preset when built for graphql`, () => {
    const aa123Qr20191PresetGraphql =
      aa123Qr20191().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
