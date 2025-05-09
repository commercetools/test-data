import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20152 from './gg-123-qr-2015-2';

describe(`with gg123Qr20152 preset`, () => {
  it(`should return a gg123Qr20152 preset`, () => {
    const gg123Qr20152Preset = gg123Qr20152().build<TStandalonePriceDraft>();
    expect(gg123Qr20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-2",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1683000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20152 preset when built for graphql`, () => {
    const gg123Qr20152PresetGraphql =
      gg123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-2",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1683000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
