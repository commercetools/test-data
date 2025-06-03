import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20154 from './x-234-wx-2015-4';

describe(`with x234Wx20154 preset`, () => {
  it(`should return a x234Wx20154 preset`, () => {
    const x234Wx20154Preset = x234Wx20154().build<TStandalonePriceDraft>();
    expect(x234Wx20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x234Wx20154 preset when built for graphql`, () => {
    const x234Wx20154PresetGraphql =
      x234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
