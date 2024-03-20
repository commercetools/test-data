import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20158 from './gg-123-qr-2015-8';

describe(`with gg123Qr20158 preset`, () => {
  it(`should return a gg123Qr20158 preset`, () => {
    const gg123Qr20158Preset = gg123Qr20158().build<TStandalonePriceDraft>();
    expect(gg123Qr20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-8",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1870001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20158 preset when built for graphql`, () => {
    const gg123Qr20158PresetGraphql =
      gg123Qr20158().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-8",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1870001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
