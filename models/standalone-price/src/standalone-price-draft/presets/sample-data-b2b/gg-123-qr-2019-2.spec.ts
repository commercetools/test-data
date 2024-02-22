import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20192 from './gg-123-qr-2019-2';

describe(`with gg123Qr20192 preset`, () => {
  it(`should return a gg123Qr20192 preset`, () => {
    const gg123Qr20192Preset = gg123Qr20192().build<TStandalonePriceDraft>();
    expect(gg123Qr20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-2",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1870000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20192 preset when built for graphql`, () => {
    const gg123Qr20192PresetGraphql =
      gg123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-2",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1870000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
