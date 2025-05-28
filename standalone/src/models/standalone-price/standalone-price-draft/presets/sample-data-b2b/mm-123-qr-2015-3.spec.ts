import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20153 from './mm-123-qr-2015-3';

describe(`with mm123Qr20153 preset`, () => {
  it(`should return a mm123Qr20153 preset`, () => {
    const mm123Qr20153Preset = mm123Qr20153().build<TStandalonePriceDraft>();
    expect(mm123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20153 preset when built for graphql`, () => {
    const mm123Qr20153PresetGraphql =
      mm123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
