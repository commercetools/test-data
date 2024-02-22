import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20157 from './gg-123-qr-2015-7';

describe(`with gg123Qr20157 preset`, () => {
  it(`should return a gg123Qr20157 preset`, () => {
    const gg123Qr20157Preset = gg123Qr20157().build<TStandalonePriceDraft>();
    expect(gg123Qr20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-7",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2040000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20157 preset when built for graphql`, () => {
    const gg123Qr20157PresetGraphql =
      gg123Qr20157().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-7",
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2040000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
