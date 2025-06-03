import type { TStandalonePriceDraft } from '../../../types';
import oilFilter1 from './oil-filter-1';

describe(`with oilFilter1 preset`, () => {
  it(`should return a oilFilter1 preset`, () => {
    const oilFilter1Preset = oilFilter1().build<TStandalonePriceDraft>();
    expect(oilFilter1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-1",
        "recurrencePolicy": undefined,
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oilFilter1 preset when built for graphql`, () => {
    const oilFilter1PresetGraphql =
      oilFilter1().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-1",
        "recurrencePolicy": undefined,
        "sku": "oil-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
