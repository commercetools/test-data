import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20152 from './dd-234-wx-2015-2';

describe(`with dd234Wx20152 preset`, () => {
  it(`should return a dd234Wx20152 preset`, () => {
    const dd234Wx20152Preset = dd234Wx20152().build<TStandalonePriceDraft>();
    expect(dd234Wx20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1485000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a dd234Wx20152 preset when built for graphql`, () => {
    const dd234Wx20152PresetGraphql =
      dd234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1485000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
