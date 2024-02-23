import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20158 from './mm-123-qr-2015-8';

describe(`with mm123Qr20158 preset`, () => {
  it(`should return a mm123Qr20158 preset`, () => {
    const mm123Qr20158Preset = mm123Qr20158().build<TStandalonePriceDraft>();
    expect(mm123Qr20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-8",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20158 preset when built for graphql`, () => {
    const mm123Qr20158PresetGraphql =
      mm123Qr20158().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-8",
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
