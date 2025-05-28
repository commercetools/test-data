import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20234 from './gg-123-qr-2023-4';

describe(`with gg123Qr20234 preset`, () => {
  it(`should return a gg123Qr20234 preset`, () => {
    const gg123Qr20234Preset = gg123Qr20234().build<TStandalonePriceDraft>();
    expect(gg123Qr20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1700000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a gg123Qr20234 preset when built for graphql`, () => {
    const gg123Qr20234PresetGraphql =
      gg123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1700000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
