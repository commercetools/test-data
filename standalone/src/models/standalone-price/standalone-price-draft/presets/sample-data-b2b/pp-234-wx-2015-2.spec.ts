import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20152 from './pp-234-wx-2015-2';

describe(`with pp234Wx20152 preset`, () => {
  it(`should return a pp234Wx20152 preset`, () => {
    const pp234Wx20152Preset = pp234Wx20152().build<TStandalonePriceDraft>();
    expect(pp234Wx20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20152 preset when built for graphql`, () => {
    const pp234Wx20152PresetGraphql =
      pp234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
