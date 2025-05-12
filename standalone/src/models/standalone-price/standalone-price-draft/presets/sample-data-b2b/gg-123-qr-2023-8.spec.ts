import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20238 from './gg-123-qr-2023-8';

describe(`with gg123Qr20238 preset`, () => {
  it(`should return a gg123Qr20238 preset`, () => {
    const gg123Qr20238Preset = gg123Qr20238().build<TStandalonePriceDraft>();
    expect(gg123Qr20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-8",
        "sku": "gg123-qr-2023",
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

  it(`should return a gg123Qr20238 preset when built for graphql`, () => {
    const gg123Qr20238PresetGraphql =
      gg123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-8",
        "sku": "gg123-qr-2023",
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
