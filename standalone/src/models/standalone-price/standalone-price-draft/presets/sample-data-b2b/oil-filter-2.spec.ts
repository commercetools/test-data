import type { TStandalonePriceDraft } from '../../../types';
import oilFilter2 from './oil-filter-2';

describe(`with oilFilter2 preset`, () => {
  it(`should return a oilFilter2 preset`, () => {
    const oilFilter2Preset = oilFilter2().build<TStandalonePriceDraft>();
    expect(oilFilter2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-2",
        "recurrencePolicy": undefined,
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oilFilter2 preset when built for graphql`, () => {
    const oilFilter2PresetGraphql =
      oilFilter2().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-2",
        "recurrencePolicy": undefined,
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
