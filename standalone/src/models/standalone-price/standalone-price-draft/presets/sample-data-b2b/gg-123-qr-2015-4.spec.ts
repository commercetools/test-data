import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20154 from './gg-123-qr-2015-4';

describe(`with gg123Qr20154 preset`, () => {
  it(`should return a gg123Qr20154 preset`, () => {
    const gg123Qr20154Preset = gg123Qr20154().build<TStandalonePriceDraft>();
    expect(gg123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2015",
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

  it(`should return a gg123Qr20154 preset when built for graphql`, () => {
    const gg123Qr20154PresetGraphql =
      gg123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2015",
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
