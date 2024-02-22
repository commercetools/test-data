import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20155 from './gg-123-qr-2015-5';

describe(`with gg123Qr20155 preset`, () => {
  it(`should return a gg123Qr20155 preset`, () => {
    const gg123Qr20155Preset = gg123Qr20155().build<TStandalonePriceDraft>();
    expect(gg123Qr20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-5",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1530000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20155 preset when built for graphql`, () => {
    const gg123Qr20155PresetGraphql =
      gg123Qr20155().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-5",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1530000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
