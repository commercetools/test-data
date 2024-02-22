import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20151 from './gg-123-qr-2015-1';

describe(`with gg123Qr20151 preset`, () => {
  it(`should return a gg123Qr20151 preset`, () => {
    const gg123Qr20151Preset = gg123Qr20151().build<TStandalonePriceDraft>();
    expect(gg123Qr20151Preset).toMatchInlineSnapshot(`
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
        "key": "gg123-qr-2015-1",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1870000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a gg123Qr20151 preset when built for graphql`, () => {
    const gg123Qr20151PresetGraphql =
      gg123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "gg123-qr-2015-1",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1870000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
