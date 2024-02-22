import type { TStandalonePriceDraft } from '../../../types';
import oilFilter3 from './oil-filter-3';

describe(`with oilFilter3 preset`, () => {
  it(`should return a oilFilter3 preset`, () => {
    const oilFilter3Preset = oilFilter3().build<TStandalonePriceDraft>();
    expect(oilFilter3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-3",
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

  it(`should return a oilFilter3 preset when built for graphql`, () => {
    const oilFilter3PresetGraphql =
      oilFilter3().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-3",
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
