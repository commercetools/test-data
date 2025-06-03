import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20151 from './dd-234-wx-2015-1';

describe(`with dd234Wx20151 preset`, () => {
  it(`should return a dd234Wx20151 preset`, () => {
    const dd234Wx20151Preset = dd234Wx20151().build<TStandalonePriceDraft>();
    expect(dd234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a dd234Wx20151 preset when built for graphql`, () => {
    const dd234Wx20151PresetGraphql =
      dd234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
