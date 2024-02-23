import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20151 from './mm-123-qr-2015-1';

describe(`with mm123Qr20151 preset`, () => {
  it(`should return a mm123Qr20151 preset`, () => {
    const mm123Qr20151Preset = mm123Qr20151().build<TStandalonePriceDraft>();
    expect(mm123Qr20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-1",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20151 preset when built for graphql`, () => {
    const mm123Qr20151PresetGraphql =
      mm123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-1",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
