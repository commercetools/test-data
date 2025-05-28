import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20157 from './dd-234-wx-2015-7';

describe(`with dd234Wx20157 preset`, () => {
  it(`should return a dd234Wx20157 preset`, () => {
    const dd234Wx20157Preset = dd234Wx20157().build<TStandalonePriceDraft>();
    expect(dd234Wx20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-7",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20157 preset when built for graphql`, () => {
    const dd234Wx20157PresetGraphql =
      dd234Wx20157().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-7",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
