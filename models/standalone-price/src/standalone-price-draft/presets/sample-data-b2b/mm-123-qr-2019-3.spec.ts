import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20193 from './mm-123-qr-2019-3';

describe(`with mm123Qr20193 preset`, () => {
  it(`should return a mm123Qr20193 preset`, () => {
    const mm123Qr20193Preset = mm123Qr20193().build<TStandalonePriceDraft>();
    expect(mm123Qr20193Preset).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2019-3",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2574000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20193 preset when built for graphql`, () => {
    const mm123Qr20193PresetGraphql =
      mm123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2019-3",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2574000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
