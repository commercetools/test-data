import type { TStandalonePriceDraft } from '../../../types';
import oilFilter8 from './oil-filter-8';

describe(`with oilFilter8 preset`, () => {
  it(`should return a oilFilter8 preset`, () => {
    const oilFilter8Preset = oilFilter8().build<TStandalonePriceDraft>();
    expect(oilFilter8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-8",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oilFilter8 preset when built for graphql`, () => {
    const oilFilter8PresetGraphql =
      oilFilter8().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-8",
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
