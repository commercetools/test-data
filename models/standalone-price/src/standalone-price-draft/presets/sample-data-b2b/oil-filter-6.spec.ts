import type { TStandalonePriceDraft } from '../../../types';
import oilFilter6 from './oil-filter-6';

describe(`with oilFilter6 preset`, () => {
  it(`should return a oilFilter6 preset`, () => {
    const oilFilter6Preset = oilFilter6().build<TStandalonePriceDraft>();
    expect(oilFilter6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-6",
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

  it(`should return a oilFilter6 preset when built for graphql`, () => {
    const oilFilter6PresetGraphql =
      oilFilter6().buildGraphql<TStandalonePriceDraft>();
    expect(oilFilter6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oil-filter-6",
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
