import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20236 from './gg-123-qr-2023-6';

describe(`with gg123Qr20236 preset`, () => {
  it(`should return a gg123Qr20236 preset`, () => {
    const gg123Qr20236Preset = gg123Qr20236().build<TStandalonePriceDraft>();
    expect(gg123Qr20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
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

  it(`should return a gg123Qr20236 preset when built for graphql`, () => {
    const gg123Qr20236PresetGraphql =
      gg123Qr20236().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-6",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
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
