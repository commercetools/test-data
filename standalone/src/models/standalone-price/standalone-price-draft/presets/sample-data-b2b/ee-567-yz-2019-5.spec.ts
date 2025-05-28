import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20195 from './ee-567-yz-2019-5';

describe(`with ee567Yz20195 preset`, () => {
  it(`should return a ee567Yz20195 preset`, () => {
    const ee567Yz20195Preset = ee567Yz20195().build<TStandalonePriceDraft>();
    expect(ee567Yz20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-5",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20195 preset when built for graphql`, () => {
    const ee567Yz20195PresetGraphql =
      ee567Yz20195().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-5",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
