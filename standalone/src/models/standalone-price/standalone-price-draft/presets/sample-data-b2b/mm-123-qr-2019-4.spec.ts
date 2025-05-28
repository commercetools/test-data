import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20194 from './mm-123-qr-2019-4';

describe(`with mm123Qr20194 preset`, () => {
  it(`should return a mm123Qr20194 preset`, () => {
    const mm123Qr20194Preset = mm123Qr20194().build<TStandalonePriceDraft>();
    expect(mm123Qr20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-4",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20194 preset when built for graphql`, () => {
    const mm123Qr20194PresetGraphql =
      mm123Qr20194().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-4",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
