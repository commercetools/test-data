import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20155 from './d-234-wx-2015-5';

describe(`with d234Wx20155 preset`, () => {
  it(`should return a d234Wx20155 preset`, () => {
    const d234Wx20155Preset = d234Wx20155().build<TStandalonePriceDraft>();
    expect(d234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 810000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20155 preset when built for graphql`, () => {
    const d234Wx20155PresetGraphql =
      d234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 810000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
