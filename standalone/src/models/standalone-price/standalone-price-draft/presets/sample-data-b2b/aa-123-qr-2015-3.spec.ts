import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20153 from './aa-123-qr-2015-3';

describe(`with aa123Qr20153 preset`, () => {
  it(`should return a aa123Qr20153 preset`, () => {
    const aa123Qr20153Preset = aa123Qr20153().build<TStandalonePriceDraft>();
    expect(aa123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-3",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20153 preset when built for graphql`, () => {
    const aa123Qr20153PresetGraphql =
      aa123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-3",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
