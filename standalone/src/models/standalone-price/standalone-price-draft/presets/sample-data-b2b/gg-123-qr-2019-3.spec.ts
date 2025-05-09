import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20193 from './gg-123-qr-2019-3';

describe(`with gg123Qr20193 preset`, () => {
  it(`should return a gg123Qr20193 preset`, () => {
    const gg123Qr20193Preset = gg123Qr20193().build<TStandalonePriceDraft>();
    expect(gg123Qr20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-3",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2431000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20193 preset when built for graphql`, () => {
    const gg123Qr20193PresetGraphql =
      gg123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-3",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2431000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
