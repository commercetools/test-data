import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20154 from './ee-567-yz-2015-4';

describe(`with ee567Yz20154 preset`, () => {
  it(`should return a ee567Yz20154 preset`, () => {
    const ee567Yz20154Preset = ee567Yz20154().build<TStandalonePriceDraft>();
    expect(ee567Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-4",
        "sku": "ee567-yz-2015",
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

  it(`should return a ee567Yz20154 preset when built for graphql`, () => {
    const ee567Yz20154PresetGraphql =
      ee567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-4",
        "sku": "ee567-yz-2015",
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
