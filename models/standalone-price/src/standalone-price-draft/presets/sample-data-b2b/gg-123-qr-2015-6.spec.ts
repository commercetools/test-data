import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20156 from './gg-123-qr-2015-6';

describe(`with gg123Qr20156 preset`, () => {
  it(`should return a gg123Qr20156 preset`, () => {
    const gg123Qr20156Preset = gg123Qr20156().build<TStandalonePriceDraft>();
    expect(gg123Qr20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-6",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1360000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20156 preset when built for graphql`, () => {
    const gg123Qr20156PresetGraphql =
      gg123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-6",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1360000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
