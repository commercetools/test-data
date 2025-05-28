import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20191 from './mm-123-qr-2019-1';

describe(`with mm123Qr20191 preset`, () => {
  it(`should return a mm123Qr20191 preset`, () => {
    const mm123Qr20191Preset = mm123Qr20191().build<TStandalonePriceDraft>();
    expect(mm123Qr20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20191 preset when built for graphql`, () => {
    const mm123Qr20191PresetGraphql =
      mm123Qr20191().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
