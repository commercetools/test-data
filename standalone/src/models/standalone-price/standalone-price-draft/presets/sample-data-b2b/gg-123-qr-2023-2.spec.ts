import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20232 from './gg-123-qr-2023-2';

describe(`with gg123Qr20232 preset`, () => {
  it(`should return a gg123Qr20232 preset`, () => {
    const gg123Qr20232Preset = gg123Qr20232().build<TStandalonePriceDraft>();
    expect(gg123Qr20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2057001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20232 preset when built for graphql`, () => {
    const gg123Qr20232PresetGraphql =
      gg123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-2",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2057001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
