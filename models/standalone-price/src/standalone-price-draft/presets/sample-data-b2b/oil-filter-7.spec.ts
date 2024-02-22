import type { TStandalonePriceDraft } from '../../../types';
import oilFilter7 from './oil-filter-7';

describe(`with oilFilter7 preset`, () => {
  it(`should return a oilFilter7 preset`, () => {
    const oilFilter7Preset = oilFilter7().build<TStandalonePriceDraft>();
    expect(oilFilter7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-7",
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

  it(`should return a oilFilter7 preset when built for graphql`, () => {
    const oilFilter7PresetGraphql =
      oilFilter7().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-7",
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
