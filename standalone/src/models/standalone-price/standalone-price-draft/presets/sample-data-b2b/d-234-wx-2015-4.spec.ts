import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20154 from './d-234-wx-2015-4';

describe(`with d234Wx20154 preset`, () => {
  it(`should return a d234Wx20154 preset`, () => {
    const d234Wx20154Preset = d234Wx20154().build<TStandalonePriceDraft>();
    expect(d234Wx20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a d234Wx20154 preset when built for graphql`, () => {
    const d234Wx20154PresetGraphql =
      d234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
